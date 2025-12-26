import {FacetSelection} from './facet-selection.model';

export interface FacetPreset {
  id: string;
  name: string;
  identifier: string;
  selections: FacetSelection[];
  createdAt: string;
  updatedAt?: string;
}
