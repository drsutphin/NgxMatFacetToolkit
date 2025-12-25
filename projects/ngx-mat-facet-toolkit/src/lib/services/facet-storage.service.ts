import {Injectable} from '@angular/core';
import {FacetSelection, FacetStorageStrategy} from '../models';

@Injectable({
  providedIn: 'root'
})
export class FacetStorageService {


  private storageStrategy: FacetStorageStrategy = 'session';

  /**
   * Update the loggingCallback function
   */
  updateLoggingCallback(loggingCallback: (...args: any[]) => void) {
    this.loggingCallback = loggingCallback;
  }

  /**
   * Saves the selected facets to localStorage for our current identifier
   */
  updateSavedFacets(identifier: string | null, selectedFacets: FacetSelection[]) {
    if (!identifier) {
      this.loggingCallback(`Cannot update ${this.mode}, no ID set`);
      return;
    }

    if (this.storageStrategy === 'none') {
      return;
    }

    this.loggingCallback(`Saving facets in ${this.mode} for component with ID`, identifier);
    this.storageBackend?.setItem(identifier, JSON.stringify(selectedFacets));
  }


  /**
   * Clears previously saved facets for this specific component
   */
  clearStorage(identifier: string | null) {
    if (!identifier) {
      return;
    }

    if (this.storageStrategy === 'none') {
      return;
    }

    this.loggingCallback(`Clearing ${this.mode} for ID`, identifier);
    this.storageBackend?.removeItem(identifier);
  }

  /**
   * Loads facets from storage for our current identifier
   */
  loadFacetsFromStorage(identifier: string | null): FacetSelection[] {
    let sessionFacets = [];

    if (this.storageStrategy === 'none') {
      return [];
    }

    if (!!identifier && !this.checkStorage(identifier)) {
      sessionFacets = JSON.parse(this.storageBackend?.getItem(identifier) || '[]');

      sessionFacets = (sessionFacets || []);

      this.loggingCallback('Loaded facets for component with ID', identifier, sessionFacets);
    } else if (!identifier) {
      this.loggingCallback('No identifier set on this component');
    } else if (this.checkStorage(identifier)) {
      this.loggingCallback(
        `No ${this.mode} variable set for component with ID`,
        identifier,
        localStorage.getItem(identifier)
      );
    }

    return sessionFacets;
  }

  private loggingCallback: (...args: any[]) => void = () => {
  };

  updateStorageStrategy(strategy: FacetStorageStrategy) {
    this.storageStrategy = strategy;
  }

  private get mode(): 'localStorage' | 'sessionStorage' | 'none' {
    if (this.storageStrategy === 'none') {
      return 'none';
    }
    return (this.storageStrategy === 'local' ? 'localStorage' : 'sessionStorage');
  }

  private checkStorage(key: string): boolean {
    return !this.storageBackend?.getItem(key);
  }

  private get storageBackend(): Storage | null {
    if (this.storageStrategy === 'none') {
      return null;
    }
    return this.storageStrategy === 'local' ? localStorage : sessionStorage;
  }
}
