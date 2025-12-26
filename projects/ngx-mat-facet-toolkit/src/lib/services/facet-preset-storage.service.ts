import {Injectable} from '@angular/core';
import {
  DEFAULT_FACET_PRESET_STORAGE_CONFIG,
  FacetPreset,
  FacetPresetStorageCallbacks,
  FacetPresetStorageConfig,
  FacetPresetStorageStrategy
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class FacetPresetStorageService {
  private loggingCallback: (...args: any[]) => void = () => {};
  private storageStrategy: FacetPresetStorageStrategy = DEFAULT_FACET_PRESET_STORAGE_CONFIG.strategy || 'local';
  private keyPrefix = DEFAULT_FACET_PRESET_STORAGE_CONFIG.keyPrefix || 'ngx-mat-facet-presets';
  private callbacks: FacetPresetStorageCallbacks = DEFAULT_FACET_PRESET_STORAGE_CONFIG.callbacks || {};

  updateLoggingCallback(loggingCallback: (...args: any[]) => void) {
    this.loggingCallback = loggingCallback;
  }

  updateStorageStrategy(strategy: FacetPresetStorageStrategy) {
    this.storageStrategy = strategy;
  }

  updateStorageKeyPrefix(prefix: string) {
    if (!prefix) {
      return;
    }
    this.keyPrefix = prefix;
  }

  updateStorageCallbacks(callbacks: FacetPresetStorageCallbacks) {
    this.callbacks = callbacks || {};
  }

  updateStorageConfig(config: FacetPresetStorageConfig | null | undefined) {
    if (!config) {
      return;
    }
    if (config.strategy) {
      this.storageStrategy = config.strategy;
    }
    if (config.keyPrefix) {
      this.keyPrefix = config.keyPrefix;
    }
    if (config.callbacks) {
      this.callbacks = config.callbacks;
    }
  }

  loadPresets(identifier: string | null): FacetPreset[] {
    if (!identifier) {
      this.loggingCallback('Cannot load presets, no ID set');
      return [];
    }

    if (this.callbacks.loadPresets) {
      return this.callbacks.loadPresets(identifier) || [];
    }

    if (this.storageStrategy === 'none') {
      return [];
    }

    const stored = this.storageBackend?.getItem(this.getStorageKey(identifier));
    if (!stored) {
      return [];
    }

    try {
      const parsed = JSON.parse(stored) as FacetPreset[];
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed;
    } catch {
      this.loggingCallback('Failed to parse preset storage for ID', identifier);
      return [];
    }
  }

  savePresets(identifier: string | null, presets: FacetPreset[]) {
    if (!identifier) {
      this.loggingCallback('Cannot save presets, no ID set');
      return;
    }

    if (this.callbacks.savePresets) {
      this.callbacks.savePresets(identifier, presets || []);
      return;
    }

    if (this.storageStrategy === 'none') {
      return;
    }

    this.storageBackend?.setItem(this.getStorageKey(identifier), JSON.stringify(presets || []));
  }

  clearPresets(identifier: string | null) {
    if (!identifier) {
      this.loggingCallback('Cannot clear presets, no ID set');
      return;
    }

    if (this.callbacks.clearPresets) {
      this.callbacks.clearPresets(identifier);
      return;
    }

    if (this.storageStrategy === 'none') {
      return;
    }

    this.storageBackend?.removeItem(this.getStorageKey(identifier));
  }

  private getStorageKey(identifier: string): string {
    return `${this.keyPrefix}:${identifier}`;
  }

  private get storageBackend(): Storage | null {
    if (this.storageStrategy === 'none') {
      return null;
    }
    return this.storageStrategy === 'local' ? localStorage : sessionStorage;
  }
}
