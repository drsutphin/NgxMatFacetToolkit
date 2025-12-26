import {FacetPreset} from './facet-preset.model';

export type FacetPresetStorageStrategy = 'local' | 'session' | 'none';

export interface FacetPresetStorageCallbacks {
  loadPresets?: (identifier: string) => FacetPreset[];
  savePresets?: (identifier: string, presets: FacetPreset[]) => void;
  clearPresets?: (identifier: string) => void;
}

export interface FacetPresetStorageConfig {
  strategy?: FacetPresetStorageStrategy;
  keyPrefix?: string;
  callbacks?: FacetPresetStorageCallbacks;
}

export const DEFAULT_FACET_PRESET_STORAGE_CONFIG: FacetPresetStorageConfig = {
  strategy: 'local',
  keyPrefix: 'ngx-mat-facet-presets',
  callbacks: {}
};
