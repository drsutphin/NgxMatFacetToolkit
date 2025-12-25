export enum FacetIdentifierStrategy {
  WindowURL = 'windowURL',
  ParentID = 'parentID',
  Random = 'random',
  Manual = 'manual'
}

export type FacetStorageStrategy = 'session' | 'local' | 'none';

export interface FacetToolkitConfig {
  allowDebugClick: boolean;
  identifierStrategy: FacetIdentifierStrategy;
  loggingCallback: (...args: any[]) => void;
  storage: FacetStorageStrategy;
}

export const DEFAULT_FACET_TOOLKIT_CONFIG: FacetToolkitConfig = {
  allowDebugClick: false,
  identifierStrategy: FacetIdentifierStrategy.ParentID,
  loggingCallback: () => {},
  storage: 'session'
};
