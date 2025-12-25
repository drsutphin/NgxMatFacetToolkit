import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  computed,
  effect,
  inject,
  input,
  output,
  signal
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule, MatChipSelectionChange} from '@angular/material/chips';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
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
  FacetSelection,
  FacetToolkitConfig,
  FacetValue
} from './models';
import {FacetEditorState} from './models/facet-editor-state.model';
import {FacetDetailsModalComponent} from './modals/facet-details-modal/facet-details-modal.component';
import {FacetModalService} from './modals/facet-modal.service';
import {VCRefInjector} from './misc/parent.helper';
import {v4 as uuidv4} from 'uuid';
import {chipAnimation} from './ngx-mat-facet-toolkit.animations';
import {FacetStorageService} from './services/facet-storage.service';
import {FACET_TOOLKIT_CONFIG} from './facet-toolkit.config';
import {FacetResultType} from './models/facet-result.model';
import {CSVPipe, FilterPipe, KeysPipe} from './pipes';
import {FocusOnShowDirective} from './directives/focus-on-show.directive';

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
export class NgxMatFacetToolkitComponent implements AfterViewInit {
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

  readonly facetChange = output<FacetSelection[]>();
  readonly facetRemoved = output<FacetSelection>();
  readonly facetReset = output<void>();

  @ViewChild('filterInput') filterInput!: ElementRef<HTMLInputElement>;
  @ViewChild(MatAutocompleteTrigger, {read: MatAutocompleteTrigger}) inputAutoComplete!: MatAutocompleteTrigger;

  readonly FacetDataType = FacetDataType;
  readonly FacetFilterType = FacetFilterType;

  readonly selectedFacetId = signal<string | null>(null);
  readonly filterText = signal('');

  private readonly injectedConfig = inject(FACET_TOOLKIT_CONFIG);
  private readonly storageService = inject(FacetStorageService);
  private readonly modal = inject(FacetModalService);
  private readonly vcRef = inject(ViewContainerRef);

  private readonly identifierStrategy = signal<FacetIdentifierStrategy>(FacetIdentifierStrategy.ParentID);
  private readonly resolvedIdentifier = signal<string | null>(null);
  private readonly allowDebugClick = signal(false);
  private readonly loggingCallback = signal<(...args: any[]) => void>(() => {});
  private timeoutHandler: ReturnType<typeof setTimeout> | null = null;

  private readonly injectorRef = new VCRefInjector(this.vcRef.injector);

  readonly selectedFacets = signal<FacetSelection[]>([]);

  readonly facetDefinitions = computed(() => this.facets() || []);

  readonly selectedFacetViews = computed(() =>
    this.selectedFacets()
      .map(selection => this.toEditorState(selection))
      .filter((facet): facet is FacetEditorState => !!facet)
  );

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
      const config = {
        ...DEFAULT_FACET_TOOLKIT_CONFIG,
        ...this.injectedConfig,
        ...this.config()
      };
      this.allowDebugClick.set(config.allowDebugClick);
      this.identifierStrategy.set(config.identifierStrategy);
      this.loggingCallback.set(config.loggingCallback);
      this.storageService.updateLoggingCallback(config.loggingCallback);
      this.storageService.updateStorageStrategy(config.storage);
      this.resolveIdentity();
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
    const facetDetailsModal = this.modal.open(FacetDetailsModalComponent, target as ElementRef | HTMLElement, {
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
    if (!this.confirmOnRemove() || (this.confirmOnRemove() && confirm(`Do you really want to remove "${facet.label}" filter?`))) {
      const updatedSelections = this.selectedFacets().filter(selection => selection.id !== facet.id);
      this.selectedFacets.set(updatedSelections);
      this.storageService.updateSavedFacets(this.resolvedIdentifier(), updatedSelections);
      this.facetRemoved.emit(this.toSelection(facet, facet.values, facet.filterType));
      return true;
    }
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
