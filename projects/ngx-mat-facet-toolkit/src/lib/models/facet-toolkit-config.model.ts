import {DEFAULT_FACET_PRESET_STORAGE_CONFIG, FacetPresetStorageConfig} from './facet-preset-storage.model';
import {
  FacetToolkitThemeMode,
  FacetToolkitThemeOverrides,
  FacetToolkitThemeVariables
} from './facet-toolkit-theme.model';

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
  presetStorage?: FacetPresetStorageConfig;
  showFilterCount: boolean;
  storage: FacetStorageStrategy;
  themeMode: FacetToolkitThemeMode;
  themeOverrides?: FacetToolkitThemeOverrides;
  darkThemeOverrides?: FacetToolkitThemeOverrides;
  themeVariables?: FacetToolkitThemeVariables;
  darkThemeVariables?: FacetToolkitThemeVariables;
  applyThemeToRoot: boolean;
}

export const DEFAULT_FACET_TOOLKIT_CONFIG: FacetToolkitConfig = {
  allowDebugClick: false,
  chipRowScrollable: false,
  identifierStrategy: FacetIdentifierStrategy.ParentID,
  loggingCallback: () => {},
  presetStorage: DEFAULT_FACET_PRESET_STORAGE_CONFIG,
  showFilterCount: false,
  storage: 'session',
  themeMode: 'auto',
  themeOverrides: {},
  darkThemeOverrides: {},
  themeVariables: {},
  darkThemeVariables: {},
  applyThemeToRoot: false
};
