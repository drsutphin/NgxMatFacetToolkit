import {FacetEditorState} from './facet-editor-state.model';

export enum FacetResultType {
  REMOVE,
  CANCEL,
  ADD
}

export interface FacetResult {
  type: FacetResultType;
  data?: FacetEditorState;
}
