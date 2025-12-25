import {enableProdMode} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {AppComponent} from './app/app.component';
import {APP_ROUTES} from './app/app.routes';
import {environment} from './environments/environment';
import {FacetIdentifierStrategy, provideFacetToolkitConfig} from '@drsutphin/ngx-mat-facet-toolkit';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(APP_ROUTES),
    provideFacetToolkitConfig({
      loggingCallback: (...args) => {
        console.log(...args);
      },
      identifierStrategy: FacetIdentifierStrategy.ParentID
    })
  ]
}).catch(err => console.error(err));
