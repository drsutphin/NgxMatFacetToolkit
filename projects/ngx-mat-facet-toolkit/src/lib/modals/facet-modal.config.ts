export interface FacetModalConfig<T = any> {
  backdropClass: string;
  data?: T;
  disableClose: boolean;
  hasBackdrop?: boolean;
  panelClass: string | string[];
  offsetX?: number;
  offsetY?: number;
  isUpdate: boolean;
  width?: string;
}


export const DefaultFacetModalConfig: FacetModalConfig = {
  backdropClass: '',
  disableClose: false,
  hasBackdrop: true,
  panelClass: '',
  isUpdate: false,
};
