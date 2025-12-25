import {Observable} from 'rxjs';
import {FacetDefinition} from './facet-definition.model';
import {FacetFilterType} from './facet-filter-type.model';
import {FacetValue} from './facet-value.model';

export interface FacetEditorState extends FacetDefinition {
  values: FacetValue[];
  options?: Observable<FacetValue[]> | FacetValue[];
  filterType?: FacetFilterType;
}
