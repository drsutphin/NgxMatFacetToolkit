# NgxMatFacetToolkit Codebase Guide

## Overview
NgxMatFacetToolkit is an Angular 19 standalone library that provides a Material-based facet search bar with chips, modal editors, and configurable facet types. The repo contains:
- a reusable library (`projects/ngx-mat-facet-toolkit`)
- a demo application (`projects/demo-application`)
- tests (Jest for the library, Playwright for e2e)

## Project Layout
- `projects/ngx-mat-facet-toolkit/`
  - `src/lib/` core library code (component, modals, services, models)
  - `_facet-toolkit-theme.scss` Material theming mixins
  - `README.md` library usage notes
  - `ng-package.json` ng-packagr build config
- `projects/demo-application/`
  - `src/app/` demo UI using the library
  - `src/styles.scss` Material + library theme setup
- `e2e/` Playwright specs
- `playwright.config.ts` Playwright config
- `package.json` workspace scripts and dependencies

## Public API Surface
Defined in `projects/ngx-mat-facet-toolkit/src/public-api.ts`:
- `NgxMatFacetToolkitComponent`
- Models in `projects/ngx-mat-facet-toolkit/src/lib/models/`
- Config: `FACET_TOOLKIT_CONFIG` and `provideFacetToolkitConfig`
- Modal types: `FacetModalConfig`, `FACET_MODAL_DATA`

## Core Features
- Facet search bar with chips + autocomplete to add facets.
- Modal-driven facet editor (overlay) for configuring selections/values.
- Persisted facet selections using browser storage keyed by component identity.
- Built-in facet types:
  - Text (with filter types)
  - Boolean
  - Category / CategorySingle
  - Typeahead / TypeaheadSingle
  - Date / DateRange
- Configurable UI:
  - placeholder text, chip labels, icons, tooltip, width, backdrop, etc.
- Theme support via SCSS mixins (M2 theming API).

## Library Internals

### NgxMatFacetToolkitComponent
File: `projects/ngx-mat-facet-toolkit/src/lib/ngx-mat-facet-toolkit.component.ts`

Responsibilities:
- Accepts facet definitions (`facets` signal input) and builds a working list of:
  - `selectedFacets`
  - `availableFacets`
  - `filteredFacets` (autocomplete filtering)
- Exposes `facetChange`, emitting selected facets with active values.
- Maintains identity for persistence based on `FacetIdentifierStrategy`.
- Uses `FacetModalService` to open the facet editor overlay.
- Supports a long-click debug action to print identity.

Key inputs (component):
- `facets`: `FacetDefinition[]` definitions.
- `placeholder`, `clearButtonText`, `clearButtonEnabled`, `dateFormat`
- `tooltip`, `displayFilterIcon`
- `facetWidth`, `facetHasBackdrop`
- `confirmOnRemove`, `chipLabelsEnabled`
- `identifier`: optional explicit identity.

Key outputs:
- `facetChange`: emits a normalized list of facets with active values.

### Modal System
Files:
- `projects/ngx-mat-facet-toolkit/src/lib/modals/facet-modal.service.ts`
- `projects/ngx-mat-facet-toolkit/src/lib/modals/facet-modal.ref.ts`
- `projects/ngx-mat-facet-toolkit/src/lib/modals/facet-modal.config.ts`
- `projects/ngx-mat-facet-toolkit/src/lib/modals/facet-modal/*`
- `projects/ngx-mat-facet-toolkit/src/lib/modals/facet-details-modal/*`

How it works:
- `FacetModalService` creates a CDK overlay anchored to a target element.
- `FacetModalComponent` hosts portal content with open/close animation.
- `FacetDetailsModalComponent` renders the actual facet editor UI.
- `FacetModalRef` provides `afterClosed()` and `beforeClosed()` observables.

### Models
Files: `projects/ngx-mat-facet-toolkit/src/lib/models/*`

Key types:
- `FacetDefinition`: definition of a facet (type, label, options, typeahead handler, defaults).
- `FacetValue`: a selected/available value.
- `FacetDataType`: facet categories (Text, Date, Category, etc.).
- `FacetFilterType`: comparison strategies (contains, startsWith, between, etc.).
- `FacetResult` and `FacetResultType`: modal close results.
- `FacetToolkitConfig` and `FacetIdentifierStrategy`: global behavior settings.

### Storage and Identity
Files:
- `projects/ngx-mat-facet-toolkit/src/lib/services/facet-storage.service.ts`
- `projects/ngx-mat-facet-toolkit/src/lib/misc/parent.helper.ts`

Behavior:
- Stores selections using `sessionStorage` by default.
- Identity is derived from one of:
  - Parent component selector (default via `VCRefInjector`)
  - Window URL
  - Random UUID
  - Manual override
- `FacetToolkitConfig` allows logging, storage, and identity strategy configuration.

### Pipes + Directive
- `CSVPipe`: joins values for display.
- `FilterPipe`: simple equality filter.
- `KeysPipe`: maps object keys to `{key, value}`.
- `FocusOnShowDirective`: focuses the first element shown in a modal list.

## Theming
- Library provides SCSS mixins in `projects/ngx-mat-facet-toolkit/_facet-toolkit-theme.scss`.
- Demo app uses Material M2 theming functions and applies:
  - `mat.all-component-themes($light-theme)` for the base theme.
  - `mat.all-component-colors($dark-theme)` for `.dark-theme`.
- The library theme integrates with Material color/typography configs.

## Demo Application
Location: `projects/demo-application/src/app`

Flow:
- `AppComponent` configures `provideFacetToolkitConfig` for logging + identity strategy.
- `PageOneComponent` and `PageTwoComponent` each host facet search.
- `SettingsComponent` generates a rotating set of sample facets.
- `OutputComponent` renders emitted facet selections.

## Tests
- Library unit tests use Jest:
  - Config: `projects/ngx-mat-facet-toolkit/jest.config.js`
  - Setup: `projects/ngx-mat-facet-toolkit/jest.setup.ts`
- E2E uses Playwright:
  - Config: `playwright.config.ts`
  - Spec: `e2e/facet-search.spec.ts`

## Build & Scripts
Common commands:
- `npm run build` (library build)
- `npx ng build ngx-mat-facet-toolkit`
- `npx ng build demo-application`
- `npm run test`
- `npm run lint`
- `npm run e2e`

## Known Constraints / Notes
- The library is standalone-only and uses Angular control flow (`@if`, `@for`, `@switch`).
- Playwright may require OS browser dependencies; see Playwright install warnings.
- Demo theme uses M2 theming APIs to remain compatible with Material v19.
