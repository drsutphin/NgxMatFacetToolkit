import {InjectionToken, makeEnvironmentProviders} from '@angular/core';
import {DEFAULT_FACET_TOOLKIT_CONFIG, FacetToolkitConfig} from './models';

export const FACET_TOOLKIT_CONFIG = new InjectionToken<FacetToolkitConfig>(
  'Facet Toolkit Configuration',
  {
    providedIn: 'root',
    factory: () => DEFAULT_FACET_TOOLKIT_CONFIG
  }
);

export const provideFacetToolkitConfig = (config: Partial<FacetToolkitConfig>) =>
  makeEnvironmentProviders([
    {
      provide: FACET_TOOLKIT_CONFIG,
      useValue: {
        ...DEFAULT_FACET_TOOLKIT_CONFIG,
        ...config
      }
    }
  ]);
