import {FacetDataType} from './facet-data-type.model';
import {FacetFilterType} from './facet-filter-type.model';
import {FacetValue} from './facet-value.model';

export interface FacetSelection {
  id: string;
  type: FacetDataType;
  filterType?: FacetFilterType;
  values: FacetValue[];
}
