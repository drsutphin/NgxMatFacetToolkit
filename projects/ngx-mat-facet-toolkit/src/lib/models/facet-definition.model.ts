import {Observable} from 'rxjs';
import {FacetDataType} from './facet-data-type.model';
import {FacetFilterType} from './facet-filter-type.model';
import {FacetValue} from './facet-value.model';

export interface FacetDefinition {
  id: string;
  label: string;
  description?: string;
  readonly?: boolean;
  type: FacetDataType;
  dataType?: 'boolean' | 'number' | 'string' | 'date';
  options?: Observable<FacetValue[]> | FacetValue[];
  defaultValues?: FacetValue[];
  typeahead?: {
    provider: (searchText: string) => Observable<FacetValue[]>;
    debounce?: number;
    placeholder?: string;
  };
  fixedFilterType?: FacetFilterType;
  icon?: string;
  iconClass?: string;
  cssClass?: string;
  placeholder?: string;
}
