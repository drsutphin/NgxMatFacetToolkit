import {AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {debounceTime, tap} from 'rxjs/operators';
import {FacetDataType, FacetFilterType, FacetValue} from '../../models';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {animate, style, transition, trigger} from '@angular/animations';
import {FacetModalRef} from '../facet-modal.ref';
import {FACET_MODAL_DATA} from '../facet-modal.data';
import {MatSelectionListChange} from '@angular/material/list';
import {FacetResultType} from '../../models/facet-result.model';
import {FacetEditorState} from '../../models/facet-editor-state.model';
import {FocusOnShowDirective} from '../../directives/focus-on-show.directive';

const MAX_TEXT_LENGTH = 60;

@Component({
  selector: 'ngx-mat-facet-details-modal',
  templateUrl: './facet-details-modal.component.html',
  styleUrls: ['./facet-details-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    FocusOnShowDirective
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: '0', height: 0}),
        animate('.2s ease-out', style({opacity: '1', height: '*'})),
      ]),
    ]),
  ],
})
export class FacetDetailsModalComponent implements OnInit, AfterViewInit {

  @ViewChildren('typeAheadInput') typeAheadInputs: QueryList<ElementRef>;

  public isUpdate: boolean;
  public typeaheadText: string | null;
  public clearButtonDisabled = true;
  public resolvedOptions$: Observable<FacetValue[]> | undefined;

  public FacetDataType = FacetDataType;
  public FacetFilterType = FacetFilterType;

  private typeAheadInputChanged = new BehaviorSubject<string>('');

  constructor(@Inject(FACET_MODAL_DATA) public data: FacetEditorState, public modalRef: FacetModalRef) {
    this.isUpdate = modalRef.config.isUpdate;
  }

  ngOnInit() {
    switch (this.data.type) {
      case FacetDataType.Typeahead:
      case FacetDataType.TypeaheadSingle:
        if (this.data.typeahead?.provider) {
          this.resolvedOptions$ = this.data.typeahead.provider('');
        }
        break;

      case FacetDataType.Date:
        this.data.values = this.data.values?.length ? this.data.values : [{value: null}];
        break;

      case FacetDataType.DateRange:
        this.data.values = this.data.values?.length ? this.data.values : [{value: null}, {value: null}];
        break;

      case FacetDataType.Boolean:
        this.data.values = this.data.values?.length ? this.data.values : [{value: null}];
        break;

      case FacetDataType.Text:
        this.data.values = this.data.values?.length ? this.data.values : [{value: ''}];
        this.data.filterType = this.data.filterType || this.data.fixedFilterType || FacetFilterType.contains;
        break;
      case FacetDataType.Numeric:
        this.data.values = this.data.values?.length ? this.data.values : [{value: null}];
        this.data.filterType = this.data.filterType || this.data.fixedFilterType || FacetFilterType.equal;
        this.ensureNumericValues(this.data.filterType);
        break;

      default:
        this.data.values = this.data.values?.length ? this.data.values : [{value: null}];
    }

    if (!this.resolvedOptions$ && this.data.options) {
      this.resolvedOptions$ = this.normalizeOptions(this.data.options);
    }
  }

  ngAfterViewInit() {
    if (this.typeAheadInputs.length > 0) {
      this.typeAheadInputChanged.pipe(
        tap(() => this.resolvedOptions$ = undefined),
        debounceTime(this.data.typeahead?.debounce || 300),
      ).subscribe(search => {
        if (!!this.data.typeahead?.provider) {
          this.data.typeahead.provider((search || '')).subscribe(options => {
              this.resolvedOptions$ = of(options || []);
            }
          );
        }
      });
    }
  }

  typeaheadValueChanged(event: string) {
    this.typeAheadInputChanged.next(event || '');
    this.clearButtonDisabled = (!event || event.length === 0);
  }

  truncateText(txt: string): string {
    if (txt && txt.length) {
      return txt.length > MAX_TEXT_LENGTH ?
        `${txt.substring(0, MAX_TEXT_LENGTH).trim()}...` :
        txt;

    } else {
      return txt;
    }
  }

  onOk(): void {
    this.modalRef.close({
      type: FacetResultType.ADD,
      data: this.data
    });
  }

  onRemove(): void {
    this.modalRef.close({
      type: FacetResultType.REMOVE,
      data: this.data
    });
  }

  onCancel(): void {
    this.modalRef.close({
      type: FacetResultType.CANCEL,
    });
  }

  onClose(): void {
    this.modalRef.close();
  }

  validateAndSubmit() {
    if (!this.isUpdateButtonDisabled()) {
      this.onOk();
    }
  }

  isItemSelected = (option: FacetValue): boolean => (this.data.values || []).some(o => o.value === option.value);

  addOptionToSelected = (facet: FacetEditorState, option: FacetValue): void => {
    const isSelected = (facet.values || []).some(f => f.value === option.value);

    if (isSelected && (facet.type === FacetDataType.Category || facet.type === FacetDataType.Typeahead)) {
      facet.values = (facet.values || []).filter(f => f.value !== option.value);
    } else {
      option.selected = true;
      switch (facet.type) {
        case FacetDataType.Category:
        case FacetDataType.Typeahead:
          facet.values = (facet.values || []);
          facet.values.push(option);
          break;
        case FacetDataType.CategorySingle:
        case FacetDataType.TypeaheadSingle:
          facet.values = [option];
          break;
      }
    }
  };

  isUpdateButtonDisabled = () => {
    switch (this.data.type) {
      case FacetDataType.Category:
      case FacetDataType.CategorySingle:
      case FacetDataType.Date:
      case FacetDataType.Text:
      case FacetDataType.Numeric:
      case FacetDataType.Typeahead:
      case FacetDataType.TypeaheadSingle:
        if (this.data.type === FacetDataType.Numeric) {
          const firstValue = this.getRawValue(this.data);
          const secondValue = this.getRawValue(this.data, 1);
          if (this.data.filterType === FacetFilterType.between) {
            return firstValue === null || firstValue === undefined || secondValue === null || secondValue === undefined;
          }
          return firstValue === null || firstValue === undefined || firstValue === '';
        }
        return !(this.data.values || []).some(v => !!v?.value);
      case FacetDataType.DateRange:
        return !(this.getRawValue(this.data)) || !(this.getRawValue(this.data, 1));
      case FacetDataType.Boolean:
        return !(this.getRawValue(this.data));
    }
  };

  emptyFunction() {}

  clearInput() {
    this.typeaheadText = null;
    this.typeaheadValueChanged('');
  }

  getRawValue(facet: FacetEditorState, offset?: number): FacetValue['value'] | null {
    if (!!facet?.values?.length && facet.values[offset || 0]) {
      return facet.values[offset || 0].value;
    }

    return null;
  }

  setValue(facet: FacetEditorState, newValue: FacetValue['value'], offset?: number) {
    if (!!facet?.values?.length && facet.values[offset || 0]) {
      facet.values[offset || 0] = {
        ...facet.values[offset || 0],
        value: newValue
      };
    }
  }

  setType(newType: FacetFilterType) {
    this.data.filterType = newType;
    if (this.data.type === FacetDataType.Numeric) {
      this.ensureNumericValues(newType);
    }
  }

  private normalizeOptions(options: FacetValue[] | Observable<FacetValue[]>): Observable<FacetValue[]> {
    return Array.isArray(options) ? of(options) : options;
  }

  private ensureNumericValues(filterType: FacetFilterType) {
    const firstValue = this.getRawValue(this.data);
    if (filterType === FacetFilterType.between) {
      this.data.values = [
        {value: firstValue ?? null},
        {value: this.getRawValue(this.data, 1)}
      ];
      return;
    }

    this.data.values = [{value: firstValue ?? null}];
  }

  selectionChange(selection: MatSelectionListChange, facet: FacetEditorState, options?: FacetValue[]) {
    selection.options
      .map(selectedOption => (options || []).find(option => option.value === selectedOption.value))
      .filter((option): option is FacetValue => !!option)
      .filter(facetOption => !(facet.values || []).find(v => v.value === facetOption.value))
      .forEach(selectedOption => this.addOptionToSelected(facet, selectedOption));
  }
}
