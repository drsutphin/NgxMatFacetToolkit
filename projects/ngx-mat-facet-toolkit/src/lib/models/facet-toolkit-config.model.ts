export enum FacetIdentifierStrategy {
  WindowURL = 'windowURL',
  ParentID = 'parentID',
  Random = 'random',
  Manual = 'manual'
}

export type FacetStorageStrategy = 'session' | 'local' | 'none';

export interface FacetToolkitConfig {
  allowDebugClick: boolean;
  chipRowScrollable: boolean;
  identifierStrategy: FacetIdentifierStrategy;
  loggingCallback: (...args: any[]) => void;
  showFilterCount: boolean;
  storage: FacetStorageStrategy;
}

export const DEFAULT_FACET_TOOLKIT_CONFIG: FacetToolkitConfig = {
  allowDebugClick: false,
  chipRowScrollable: false,
  identifierStrategy: FacetIdentifierStrategy.ParentID,
  loggingCallback: () => {},
  showFilterCount: false,
  storage: 'session'
};
