import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  computed,
  effect,
  inject,
  input,
  output,
  signal
} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule, MatChipSelectionChange} from '@angular/material/chips';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {A11yModule} from '@angular/cdk/a11y';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import {fromEvent, isObservable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {
  DEFAULT_FACET_TOOLKIT_CONFIG,
  FacetDataType,
  FacetDefinition,
  FacetFilterType,
  FacetIdentifierStrategy,
  FacetPreset,
  FacetSelection,
  FacetToolkitConfig,
  FacetToolkitThemeMode,
  FacetToolkitThemeOverrides,
  FacetToolkitThemeVariables,
  FacetValue
} from './models';
import {FacetEditorState} from './models/facet-editor-state.model';
import {FacetDetailsModalComponent} from './modals/facet-details-modal/facet-details-modal.component';
import {FacetModalService} from './modals/facet-modal.service';
import {FacetRemoveConfirmModalComponent} from './modals/facet-remove-confirm-modal/facet-remove-confirm-modal.component';
import {PresetManagerModalComponent} from './modals/preset-manager-modal/preset-manager-modal.component';
import {PresetNameModalComponent} from './modals/preset-name-modal/preset-name-modal.component';
import {FacetModalConfig} from './modals/facet-modal.config';
import {VCRefInjector} from './misc/parent.helper';
import {v4 as uuidv4} from 'uuid';
import {chipAnimation} from './ngx-mat-facet-toolkit.animations';
import {FacetStorageService} from './services/facet-storage.service';
import {FacetPresetStorageService} from './services/facet-preset-storage.service';
import {FACET_TOOLKIT_CONFIG} from './facet-toolkit.config';
import {FacetResultType} from './models/facet-result.model';
import {CSVPipe, FilterPipe, KeysPipe} from './pipes';
import {FocusOnShowDirective} from './directives/focus-on-show.directive';

const THEME_VAR_MAP: Record<keyof FacetToolkitThemeOverrides, string> = {
  inputBg: '--facet-toolkit-input-bg',
  inputShadow: '--facet-toolkit-input-shadow',
  inputHoverBg: '--facet-toolkit-input-hover-bg',
  inputHoverShadow: '--facet-toolkit-input-hover-shadow',
  inputFocusShadow: '--facet-toolkit-input-focus-shadow',
  inputText: '--facet-toolkit-input-text',
  inputPlaceholder: '--facet-toolkit-input-placeholder',
  addIcon: '--facet-toolkit-add-icon',
  presetTrigger: '--facet-toolkit-preset-trigger',
  countDivider: '--facet-toolkit-count-divider',
  countBg: '--facet-toolkit-count-bg',
  countText: '--facet-toolkit-count-text',
  scrollbarThumb: '--facet-toolkit-scrollbar-thumb',
  presetRowBg: '--facet-toolkit-preset-row-bg',
  modalSurface: '--facet-toolkit-modal-surface',
  modalText: '--facet-toolkit-modal-text',
  modalHeaderBg: '--facet-toolkit-modal-header-bg',
  modalHeaderText: '--facet-toolkit-modal-header-text',
  menuSurface: '--facet-toolkit-menu-surface',
  menuText: '--facet-toolkit-menu-text',
  menuHoverBg: '--facet-toolkit-menu-hover-bg',
  clearButtonBg: '--facet-toolkit-clear-button-bg',
  clearButtonText: '--facet-toolkit-clear-button-text'
};

const mergeThemeVariables = (
  base: FacetToolkitThemeVariables | null | undefined,
  override: FacetToolkitThemeVariables | null | undefined
): FacetToolkitThemeVariables => ({
  ...(base || {}),
  ...(override || {})
});

const mapThemeVariables = (
  variables: FacetToolkitThemeVariables | null | undefined,
  suffix: 'light' | 'dark'
): FacetToolkitThemeVariables => {
  if (!variables) {
    return {};
  }

  return Object.entries(variables).reduce((acc, [key, value]) => {
    if (!value) {
      return acc;
    }
    const trimmedKey = key.trim();
    if (!trimmedKey) {
      return acc;
    }
    if (trimmedKey.endsWith('-light') || trimmedKey.endsWith('-dark')) {
      acc[trimmedKey] = value;
      return acc;
    }
    if (trimmedKey.startsWith('--facet-toolkit-')) {
      acc[`${trimmedKey}-${suffix}`] = value;
      return acc;
    }
    acc[trimmedKey] = value;
    return acc;
  }, {} as FacetToolkitThemeVariables);
};

const mapThemeOverrides = (
  overrides: FacetToolkitThemeOverrides | null | undefined,
  suffix: 'light' | 'dark'
): FacetToolkitThemeVariables => {
  if (!overrides) {
    return {};
  }

  return Object.entries(overrides).reduce((acc, [key, value]) => {
    if (!value) {
      return acc;
    }
    const varName = THEME_VAR_MAP[key as keyof FacetToolkitThemeOverrides];
    if (!varName) {
      return acc;
    }
    acc[`${varName}-${suffix}`] = value;
    return acc;
  }, {} as FacetToolkitThemeVariables);
};

@Component({
  selector: 'ngx-mat-facet-toolkit',
  standalone: true,
  imports: [
    A11yModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDividerModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatChipsModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    OverlayModule,
    PortalModule,
    MatMenuModule,
    CSVPipe,
    FilterPipe,
    KeysPipe,
    FocusOnShowDirective
  ],
  templateUrl: 'ngx-mat-facet-toolkit.component.html',
  styleUrls: ['./ngx-mat-facet-toolkit.component.scss'],
  animations: [
    chipAnimation
  ]
})
export class NgxMatFacetToolkitComponent implements AfterViewInit, OnDestroy {
  readonly facets = input<FacetDefinition[]>([]);
  readonly config = input<Partial<FacetToolkitConfig>>({});

  readonly placeholder = input('Filter Table...');
  readonly clearButtonText = input('Clear Filters');
  readonly clearButtonEnabled = input(true);
  readonly dateFormat = input('M/d/yyyy');
  readonly tooltip = input<string | null>(null);
  readonly displayFilterIcon = input(true);
  readonly facetWidth = input('400px');
  readonly facetHasBackdrop = input(true);
  readonly confirmOnRemove = input(true);
  readonly chipLabelsEnabled = input(true);
  readonly identifier = input<string | null>(null);
  readonly themeMode = input<FacetToolkitThemeMode | null>(null);
  readonly themeOverrides = input<FacetToolkitThemeOverrides | null>(null);
  readonly darkThemeOverrides = input<FacetToolkitThemeOverrides | null>(null);
  readonly themeVariables = input<FacetToolkitThemeVariables | null>(null);
  readonly darkThemeVariables = input<FacetToolkitThemeVariables | null>(null);

  @HostBinding('style') hostStyles: FacetToolkitThemeVariables = {};
  @HostBinding('class.facet-theme-dark') isThemeDark = false;
  @HostBinding('class.facet-theme-light') isThemeLight = false;

  readonly facetChange = output<FacetSelection[]>();
  readonly facetRemoved = output<FacetSelection>();
  readonly facetReset = output<void>();

  @ViewChild('filterInput') filterInput!: ElementRef<HTMLInputElement>;
  @ViewChild(MatAutocompleteTrigger, {read: MatAutocompleteTrigger}) inputAutoComplete!: MatAutocompleteTrigger;
  @ViewChild('presetMenuButton', {read: ElementRef}) presetMenuButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('chipScrollContainer', {read: ElementRef}) chipScrollContainer?: ElementRef<HTMLDivElement>;

  readonly FacetDataType = FacetDataType;
  readonly FacetFilterType = FacetFilterType;

  readonly selectedFacetId = signal<string | null>(null);
  readonly filterText = signal('');

  private readonly injectedConfig = inject(FACET_TOOLKIT_CONFIG);
  private readonly storageService = inject(FacetStorageService);
  private readonly presetStorageService = inject(FacetPresetStorageService);
  private readonly modal = inject(FacetModalService);
  private readonly vcRef = inject(ViewContainerRef);
  private readonly documentRef = inject(DOCUMENT);

  private readonly identifierStrategy = signal<FacetIdentifierStrategy>(FacetIdentifierStrategy.ParentID);
  private readonly resolvedIdentifier = signal<string | null>(null);
  private readonly allowDebugClick = signal(false);
  private readonly chipRowScrollable = signal(false);
  private readonly loggingCallback = signal<(...args: any[]) => void>(() => {});
  private readonly showFilterCount = signal(false);
  private readonly resolvedThemeMode = signal<FacetToolkitThemeMode>('auto');
  private readonly resolvedThemeVariables = signal<FacetToolkitThemeVariables>({});
  private readonly appliedRootVariables = new Set<string>();
  private readonly appliedRootClasses = new Set<string>();
  private timeoutHandler: ReturnType<typeof setTimeout> | null = null;
  private chipRowResizeObserver: ResizeObserver | null = null;
  private chipRowUpdateHandle: number | null = null;

  private readonly injectorRef = new VCRefInjector(this.vcRef.injector);

  readonly selectedFacets = signal<FacetSelection[]>([]);
  readonly activeFilterCount = computed(() => this.selectedFacets().length);
  readonly chipRowScrollableEnabled = computed(() => this.chipRowScrollable());
  readonly showFilterCountEnabled = computed(() => this.showFilterCount());

  readonly facetDefinitions = computed(() => this.facets() || []);

  readonly selectedFacetViews = computed(() =>
    this.selectedFacets()
      .map(selection => this.toEditorState(selection))
      .filter((facet): facet is FacetEditorState => !!facet)
  );

  readonly presets = signal<FacetPreset[]>([]);
  readonly presetsForMenu = computed(() =>
    [...this.presets()].sort((a, b) => a.name.localeCompare(b.name))
  );
  readonly chipRowHasOverflow = signal(false);

  readonly availableFacets = computed(() => {
    const selectedIds = new Set(this.selectedFacets().map(selection => selection.id));
    return this.facetDefinitions().filter(facet => !selectedIds.has(facet.id));
  });

  readonly filteredFacets = computed(() => {
    const filterText = this.filterText().toLowerCase();
    if (!filterText) {
      return this.availableFacets();
    }
    return this.availableFacets().filter(facet => facet.label.toLowerCase().includes(filterText));
  });

  constructor() {
    effect(() => {
      this.identifier();
      this.themeMode();
      this.themeOverrides();
      this.darkThemeOverrides();
      this.themeVariables();
      this.darkThemeVariables();
      const config = {
        ...DEFAULT_FACET_TOOLKIT_CONFIG,
        ...this.injectedConfig,
        ...this.config()
      };
      this.allowDebugClick.set(config.allowDebugClick);
      this.chipRowScrollable.set(config.chipRowScrollable);
      this.identifierStrategy.set(config.identifierStrategy);
      this.loggingCallback.set(config.loggingCallback);
      this.showFilterCount.set(config.showFilterCount);
      this.storageService.updateLoggingCallback(config.loggingCallback);
      this.storageService.updateStorageStrategy(config.storage);
      this.presetStorageService.updateLoggingCallback(config.loggingCallback);
      this.presetStorageService.updateStorageConfig(config.presetStorage);
      this.applyThemeConfig(config);
      this.resolveIdentity();
    });

    effect(() => {
      this.config();
      const identifier = this.resolvedIdentifier();
      this.refreshPresets(identifier);
    });

    effect(() => {
      const facets = this.facetDefinitions();
      const identifier = this.resolvedIdentifier();
      this.refreshSelectionsFromFacets(facets, identifier);
    });

    effect(() => {
      const selections = this.selectedFacets();
      this.facetChange.emit(selections);
    });

    effect(() => {
      this.selectedFacetViews();
      this.scheduleChipRowUpdate();
    });
  }

  private static getFixedURL(): string {
    return window.location.pathname.toString()
      .replace(/\s+/g, '-')
      .replace(/\//g, '-')
      .replace(/^-/g, '')
      .replace(/--/g, '-');
  }

  ngAfterViewInit(): void {
    fromEvent(this.filterInput.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(150),
        distinctUntilChanged(),
        map(() => this.filterInput.nativeElement.value)
      )
      .subscribe((text) => {
        this.filterText.set(text || '');
      });

    if (this.chipScrollContainer?.nativeElement && typeof ResizeObserver !== 'undefined') {
      this.chipRowResizeObserver = new ResizeObserver(() => {
        this.updateChipRowOverflow();
      });
      this.chipRowResizeObserver.observe(this.chipScrollContainer.nativeElement);
      this.scheduleChipRowUpdate();
    }
  }

  ngOnDestroy(): void {
    if (this.chipRowResizeObserver) {
      this.chipRowResizeObserver.disconnect();
      this.chipRowResizeObserver = null;
    }
    if (this.chipRowUpdateHandle !== null) {
      cancelAnimationFrame(this.chipRowUpdateHandle);
      this.chipRowUpdateHandle = null;
    }
  }

  chipSelected(event: MatChipSelectionChange, facet: FacetEditorState): void {
    if (event.selected && !facet.readonly) {
      const elementRef = event.source._elementRef.nativeElement;

      this.facetSelected(facet, {
        top: (elementRef.clientHeight - 5),
        left: -3,
      }, true, elementRef);
    }
  }

  autoCompleteDisplay(_: unknown): string {
    return '';
  }

  autoCompleteSelected(event: MatAutocompleteSelectedEvent): void {
    const selectedFacet: FacetDefinition = event.option.value;
    const parentElement = this.filterInput.nativeElement;

    if (!!parentElement) {
      const elementRef = parentElement.getBoundingClientRect();
      const top = elementRef.height - 3;
      const left = -38;

      const editorState = this.toEditorState(this.toSelection(selectedFacet, [])) || {
        ...selectedFacet,
        values: [],
        options: this.normalizeOptions(selectedFacet.options)
      };

      this.facetSelected(editorState, {top, left}, false, this.filterInput);
      this.filterInput.nativeElement.value = '';
      this.filterText.set('');
    }
  }

  facetSelected(facet: FacetEditorState, position: { top: number; left: number | undefined }, isUpdate: boolean, target: unknown): void {
    this.promptFacet({...facet}, position, isUpdate, target);
  }

  promptFacet(facet: FacetEditorState, position: { top: number; left: number | undefined }, isUpdate: boolean, target: unknown): void {
    const facetDetailsModal = this.modal.open<FacetEditorState>(FacetDetailsModalComponent, target as ElementRef | HTMLElement, {
      data: facet,
      offsetY: position.top,
      offsetX: position.left,
      isUpdate,
      hasBackdrop: this.facetHasBackdrop(),
      width: this.facetWidth()
    });

    facetDetailsModal.beforeClosed().subscribe(() => {
      this.selectedFacetId.set(null);
    });

    facetDetailsModal.afterClosed().subscribe(result => {
      if (result.type === FacetResultType.REMOVE && result.data) {
        this.removeFacet(result.data);
      } else if (result.type === FacetResultType.ADD && result.data) {
        this.addOrUpdateFacet(result.data);
      }
    });
  }

  addOrUpdateFacet(facet: FacetEditorState): void {
    const selection = this.toSelection(facet, facet.values, facet.filterType);
    const nextSelections = this.selectedFacets()
      .filter(existing => existing.id !== selection.id)
      .concat(selection);

    this.selectedFacets.set(nextSelections);
    this.storageService.updateSavedFacets(this.resolvedIdentifier(), nextSelections);
  }

  removeFacet(facet: FacetEditorState): boolean {
    if (!this.confirmOnRemove()) {
      return this.commitFacetRemoval(facet);
    }

    const target = this.filterInput?.nativeElement;
    const modalRef = this.modal.open<boolean>(
      FacetRemoveConfirmModalComponent,
      target,
      this.applyModalThemeConfig({
      centered: true,
      data: {label: facet.label},
      width: '320px'
      })
    );

    modalRef.afterClosed().subscribe(result => {
      if (result.type !== FacetResultType.ADD) {
        return;
      }
      this.commitFacetRemoval(facet);
    });

    return false;
  }

  reset(): void {
    const readonlySelections = this.facetDefinitions()
      .filter(facet => facet.readonly && (facet.defaultValues || []).length > 0)
      .map(facet => this.toSelection(facet, facet.defaultValues || []));

    this.selectedFacets.set(readonlySelections);
    this.storageService.clearStorage(this.resolvedIdentifier());
    this.facetReset.emit();
  }

  promptSavePreset(): void {
    const target = this.presetMenuButton?.nativeElement || this.filterInput?.nativeElement;
    const modalRef = this.modal.open<string>(
      PresetNameModalComponent,
      target,
      this.applyModalThemeConfig({
      data: {
        title: 'Save current filters',
        confirmLabel: 'Save preset',
        placeholder: 'Preset name'
      },
      offsetY: 20,
      offsetX: -10,
      width: '320px'
      })
    );

    modalRef.afterClosed().subscribe(result => {
      if (result.type !== FacetResultType.ADD || !result.data) {
        return;
      }
      this.savePreset(result.data);
    });
  }

  openPresetManager(): void {
    const target = this.presetMenuButton?.nativeElement || this.filterInput?.nativeElement;
    this.modal.open(
      PresetManagerModalComponent,
      target,
      this.applyModalThemeConfig({
      data: {
        presets: this.presetsForMenu(),
        onLoad: (preset: FacetPreset) => this.applyPreset(preset),
        onRename: (preset: FacetPreset, name: string) => this.renamePreset(preset, name),
        onDelete: (preset: FacetPreset) => this.deletePreset(preset)
      },
      centered: true,
      width: '380px'
      })
    );
  }

  private applyThemeConfig(config: FacetToolkitConfig): void {
    const resolvedMode = this.themeMode() ?? config.themeMode;
    const resolvedOverrides = {
      ...(config.themeOverrides || {}),
      ...(this.themeOverrides() || {})
    };
    const resolvedDarkOverrides = {
      ...(config.darkThemeOverrides || {}),
      ...(this.darkThemeOverrides() || {})
    };
    const resolvedThemeVars = mergeThemeVariables(config.themeVariables, this.themeVariables());
    const resolvedDarkThemeVars = mergeThemeVariables(config.darkThemeVariables, this.darkThemeVariables());

    this.resolvedThemeMode.set(resolvedMode);
    this.isThemeDark = resolvedMode === 'dark';
    this.isThemeLight = resolvedMode === 'light';

    const mergedVariables: FacetToolkitThemeVariables = {
      ...mapThemeOverrides(resolvedOverrides, 'light'),
      ...mapThemeOverrides(resolvedDarkOverrides, 'dark'),
      ...mapThemeVariables(resolvedThemeVars, 'light'),
      ...mapThemeVariables(resolvedDarkThemeVars, 'dark')
    };

    this.resolvedThemeVariables.set(mergedVariables);
    this.hostStyles = mergedVariables;
    this.applyRootThemeVariables(mergedVariables, resolvedMode);
  }

  private applyModalThemeConfig(config: Partial<FacetModalConfig>): Partial<FacetModalConfig> {
    const themeMode = this.resolvedThemeMode();
    const themeVariables = this.resolvedThemeVariables();
    const themeClass = themeMode === 'dark'
      ? 'facet-theme-dark'
      : themeMode === 'light'
        ? 'facet-theme-light'
        : null;

    const panelClass = this.mergePanelClass(config.panelClass, themeClass);
    return {
      ...config,
      panelClass,
      themeVariables
    };
  }

  private mergePanelClass(
    panelClass: string | string[] | undefined,
    themeClass: string | null
  ): string | string[] | undefined {
    if (!themeClass) {
      return panelClass;
    }
    if (!panelClass) {
      return themeClass;
    }
    if (Array.isArray(panelClass)) {
      return [...panelClass, themeClass];
    }
    return [panelClass, themeClass];
  }

  private applyRootThemeVariables(
    variables: FacetToolkitThemeVariables,
    themeMode: FacetToolkitThemeMode
  ): void {
    const root = this.documentRef?.documentElement;
    const rootStyle = root?.style;
    if (!rootStyle || !root) {
      return;
    }

    this.appliedRootVariables.forEach(key => rootStyle.removeProperty(key));
    this.appliedRootVariables.clear();

    Object.entries(variables).forEach(([key, value]) => {
      if (!key || !value) {
        return;
      }
      rootStyle.setProperty(key, value);
      this.appliedRootVariables.add(key);
    });

    this.appliedRootClasses.forEach(className => root.classList.remove(className));
    this.appliedRootClasses.clear();

    root.classList.add('facet-theme-panel');
    this.appliedRootClasses.add('facet-theme-panel');
    if (themeMode === 'dark') {
      root.classList.add('facet-theme-dark');
      this.appliedRootClasses.add('facet-theme-dark');
    } else if (themeMode === 'light') {
      root.classList.add('facet-theme-light');
      this.appliedRootClasses.add('facet-theme-light');
    }
  }

  applyPreset(preset: FacetPreset): void {
    const facetDefinitions = this.facetDefinitions();
    const presetById = new Map(preset.selections.map(selection => [selection.id, selection]));
    const nextSelections = facetDefinitions
      .map(facet => {
        const stored = presetById.get(facet.id);
        if (stored) {
          return stored;
        }
        if (facet.readonly && facet.defaultValues && facet.defaultValues.length > 0) {
          return this.toSelection(facet, facet.defaultValues);
        }
        return null;
      })
      .filter((selection): selection is FacetSelection => !!selection);

    this.selectedFacets.set(nextSelections);
    this.storageService.updateSavedFacets(this.resolvedIdentifier(), nextSelections);
  }

  private savePreset(name: string): void {
    const identifier = this.resolvedIdentifier();
    if (!identifier) {
      this.loggingCallback()('Cannot save preset, no identifier resolved');
      return;
    }

    const selections = this.cloneSelections(this.selectedFacets());
    const preset: FacetPreset = {
      id: uuidv4(),
      name,
      identifier,
      selections,
      createdAt: new Date().toISOString()
    };

    const nextPresets = this.presets().concat(preset);
    this.persistPresets(nextPresets);
  }

  private renamePreset(preset: FacetPreset, name: string): void {
    const nextPresets = this.presets().map(item =>
      item.id === preset.id ? {...item, name, updatedAt: new Date().toISOString()} : item
    );
    this.persistPresets(nextPresets);
  }

  private deletePreset(preset: FacetPreset): void {
    const nextPresets = this.presets().filter(item => item.id !== preset.id);
    this.persistPresets(nextPresets);
  }

  private persistPresets(presets: FacetPreset[]): void {
    this.presets.set(presets);
    this.presetStorageService.savePresets(this.resolvedIdentifier(), presets);
  }

  private refreshPresets(identifier: string | null): void {
    if (!identifier) {
      this.presets.set([]);
      return;
    }
    this.presets.set(this.presetStorageService.loadPresets(identifier));
  }

  private cloneSelections(selections: FacetSelection[]): FacetSelection[] {
    return (selections || []).map(selection => ({
      ...selection,
      values: (selection.values || []).map(value => ({...value}))
    }));
  }

  private commitFacetRemoval(facet: FacetEditorState): boolean {
    const updatedSelections = this.selectedFacets().filter(selection => selection.id !== facet.id);
    this.selectedFacets.set(updatedSelections);
    this.storageService.updateSavedFacets(this.resolvedIdentifier(), updatedSelections);
    this.facetRemoved.emit(this.toSelection(facet, facet.values, facet.filterType));
    return true;
  }

  private scheduleChipRowUpdate(): void {
    if (!this.chipScrollContainer?.nativeElement) {
      return;
    }
    if (this.chipRowUpdateHandle !== null) {
      return;
    }
    this.chipRowUpdateHandle = requestAnimationFrame(() => {
      this.chipRowUpdateHandle = null;
      this.updateChipRowOverflow();
    });
  }

  private updateChipRowOverflow(): void {
    const container = this.chipScrollContainer?.nativeElement;
    if (!container) {
      return;
    }
    this.chipRowHasOverflow.set(container.scrollWidth > container.clientWidth);
  }

  focus(event: MouseEvent) {
    event.stopPropagation();
    this.inputAutoComplete.openPanel();
  }

  getValue(facet: FacetEditorState, offset?: number): FacetValue | null {
    if (!!facet?.values?.length && facet.values[offset || 0]?.value !== undefined) {
      return facet.values[offset || 0];
    }

    return null;
  }

  getRawValue(facet: FacetEditorState, offset?: number): unknown {
    const value = this.getValue(facet, offset);
    return value ? value.value : null;
  }

  getDateValue(facet: FacetEditorState, offset?: number): string | number | Date | null {
    const value = this.getRawValue(facet, offset);
    if (value instanceof Date || typeof value === 'string' || typeof value === 'number') {
      return value;
    }
    return null;
  }

  setValue(facet: FacetEditorState, newValue: unknown, offset?: number) {
    if (!!facet?.values?.length && facet.values[offset || 0]) {
      facet.values[offset || 0] = {
        ...facet.values[offset || 0],
        value: newValue as FacetValue['value']
      };
    }
  }

  identify(identifier: string | null | undefined) {
    this.loggingCallback()(`Identifying facet with ID: ${identifier}`);
    if (!identifier || identifier.length === 0 || identifier === '-') {
      this.resolvedIdentifier.set('default-facet');
    } else {
      this.resolvedIdentifier.set(`${identifier}-facet`);
    }
  }

  getIdentifierStrategy(): FacetIdentifierStrategy {
    return this.identifierStrategy();
  }

  printIdentity() {
    console.log(this.resolvedIdentifier());
  }

  clickStarted() {
    if (!this.allowDebugClick()) {
      return;
    }

    this.timeoutHandler = setTimeout(() => {
      this.printIdentity();
      this.timeoutHandler = null;
    }, 1000);
  }

  clickEnded() {
    if (this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  private resolveIdentity(manual?: string) {
    const identifierInput = manual ?? this.identifier();
    let identity: string | undefined | null;

    this.loggingCallback()('Generating ID with strategy', this.identifierStrategy());

    switch (this.identifierStrategy()) {
      case FacetIdentifierStrategy.WindowURL:
        identity = NgxMatFacetToolkitComponent.getFixedURL();
        break;
      case FacetIdentifierStrategy.ParentID:
        identity = this.injectorRef.parentIdentifier;
        break;
      case FacetIdentifierStrategy.Random:
        identity = uuidv4();
        break;
      default:
        identity = identifierInput;
        break;
    }

    this.identify(identity);
  }

  private refreshSelectionsFromFacets(facets: FacetDefinition[], identifier: string | null) {
    if (!facets.length) {
      this.selectedFacets.set([]);
      return;
    }

    const storedSelections = this.storageService.loadFacetsFromStorage(identifier);
    const storedById = new Map(storedSelections.map(selection => [selection.id, selection]));

    const nextSelections = facets
      .map(facet => {
        const stored = storedById.get(facet.id);
        if (stored) {
          return stored;
        }
        if (facet.defaultValues && facet.defaultValues.length > 0) {
          return this.toSelection(facet, facet.defaultValues);
        }
        return null;
      })
      .filter((selection): selection is FacetSelection => !!selection);

    this.selectedFacets.set(nextSelections);
  }

  private toSelection(facet: FacetDefinition | FacetEditorState, values: FacetValue[], filterType?: FacetFilterType): FacetSelection {
    return {
      id: facet.id,
      type: facet.type,
      filterType: this.resolveFilterType(facet, filterType),
      values: values || []
    };
  }

  private resolveFilterType(facet: FacetDefinition | FacetEditorState, filterType?: FacetFilterType): FacetFilterType | undefined {
    if (filterType) {
      return filterType;
    }

    if (facet.fixedFilterType) {
      return facet.fixedFilterType;
    }

    switch (facet.type) {
      case FacetDataType.Date:
      case FacetDataType.Boolean:
      case FacetDataType.Numeric:
        return FacetFilterType.equal;
      case FacetDataType.DateRange:
        return FacetFilterType.between;
      case FacetDataType.CategorySingle:
      case FacetDataType.TypeaheadSingle:
        return FacetFilterType.equal;
      case FacetDataType.Text:
      case FacetDataType.Category:
      case FacetDataType.Typeahead:
      default:
        return FacetFilterType.contains;
    }
  }

  private toEditorState(selection: FacetSelection): FacetEditorState | null {
    const facet = this.facetDefinitions().find(definition => definition.id === selection.id);
    if (!facet) {
      return null;
    }
    return {
      ...facet,
      values: selection.values,
      filterType: selection.filterType,
      options: this.normalizeOptions(facet.options)
    };
  }

  private normalizeOptions(options?: FacetDefinition['options']): FacetDefinition['options'] | undefined {
    if (!options) {
      return undefined;
    }
    return isObservable(options) ? options : of(options);
  }
}
