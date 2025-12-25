# NgxMatFacetToolkit [![npm version](https://badge.fury.io/js/@drsutphin%2Fngx-mat-facet-toolkit.svg)](https://badge.fury.io/js/@drsutphin%2Fngx-mat-facet-toolkit)
Angular 19 standalone facet filtering toolkit with Material UI.

[Demo](https://128keaton.github.io/NgxMatFacetToolkit/)

## Install
```bash
npm install @drsutphin/ngx-mat-facet-toolkit @angular/material @angular/cdk
```

Peer dependencies:
- Angular 19
- Angular Material 19
- RxJS 7

## Theme Setup
Add the toolkit theme mixins alongside your Material theme.

```scss
@use '@angular/material' as mat;
@use '@drsutphin/ngx-mat-facet-toolkit/facet-toolkit-theme' as facetToolkit;

@include mat.all-component-typographies();
@include mat.core();

$primary: mat.m2-define-palette(mat.$m2-indigo-palette, 500);
$accent: mat.m2-define-palette(mat.$m2-pink-palette, A200, A100, A400);
$theme: mat.m2-define-light-theme((
  color: (
    primary: $primary,
    accent: $accent
  )
));

@include mat.all-component-themes($theme);
@include facetToolkit.theme($theme);
```

## Quick Start
1. Provide an optional config during bootstrap.

```ts
import {bootstrapApplication} from '@angular/platform-browser';
import {
  FacetIdentifierStrategy,
  NgxMatFacetToolkitComponent,
  provideFacetToolkitConfig
} from '@drsutphin/ngx-mat-facet-toolkit';

bootstrapApplication(AppComponent, {
  providers: [
    provideFacetToolkitConfig({
      identifierStrategy: FacetIdentifierStrategy.ParentID,
      storage: 'session'
    })
  ]
});
```

2. Supply facet definitions from your component.

```ts
import {FacetDataType, FacetDefinition, FacetFilterType} from '@drsutphin/ngx-mat-facet-toolkit';
import {delay, of} from 'rxjs';

public facets: FacetDefinition[] = [
  {
    id: 'user-name',
    label: 'User Name',
    type: FacetDataType.Text,
    description: 'Plain text filter',
    fixedFilterType: FacetFilterType.Contains
  },
  {
    id: 'birthday',
    label: 'Birthday',
    type: FacetDataType.Date
  },
  {
    id: 'license',
    label: 'License(s)',
    type: FacetDataType.Category,
    options: of([
      {value: 'a', label: 'Class A'},
      {value: 'b', label: 'Class B'}
    ]).pipe(delay(300))
  },
  {
    id: 'city',
    label: 'City',
    type: FacetDataType.Typeahead,
    typeahead: {
      provider: (searchText) => of([
        {value: `${searchText}-a`, label: `${searchText} A`},
        {value: `${searchText}-b`, label: `${searchText} B`}
      ]).pipe(delay(250)),
      placeholder: 'Search cities'
    }
  }
];
```

3. Render the component.

```html
<ngx-mat-facet-toolkit
  [facets]="facets"
  [config]="{ storage: 'session' }"
  (facetChange)="onFacetChange($event)"
  (facetRemoved)="onFacetRemoved($event)"
  (facetReset)="onFacetReset()">
</ngx-mat-facet-toolkit>
```

## Facet Types
- Text
- Boolean
- Category (multi-select)
- CategorySingle
- Typeahead
- TypeaheadSingle
- Date
- DateRange

Use `FacetDataType` to pick a type and supply `options` or `typeahead` when needed.

## Configuration
Component inputs:
- `facets`: `FacetDefinition[]`
- `config`: `Partial<FacetToolkitConfig>` for per-instance overrides
- `placeholder`: `string` (default `Filter Table...`)
- `clearButtonText`: `string`
- `clearButtonEnabled`: `boolean`
- `dateFormat`: `string`
- `tooltip`: `string | null`
- `displayFilterIcon`: `boolean`
- `facetWidth`: `string` (use `px` or `rem`)
- `facetHasBackdrop`: `boolean`
- `confirmOnRemove`: `boolean`
- `chipLabelsEnabled`: `boolean`
- `identifier`: `string | null`

Provider config (`provideFacetToolkitConfig`):
- `allowDebugClick`: `boolean`
- `identifierStrategy`: `FacetIdentifierStrategy`
- `loggingCallback`: `(...args) => void`
- `storage`: `FacetStorageStrategy` (`session`, `local`, `none`)

## Outputs
- `facetChange`: emits `FacetSelection[]` whenever the selection state changes.
- `facetRemoved`: emits the `FacetSelection` that was removed.
- `facetReset`: emits when all facets are cleared.

A `FacetSelection` includes the facet definition plus active values and filter types.

## Storage and Identity
Selections are stored by default in `sessionStorage`. You can switch to `localStorage` or disable storage.

Identity strategies:
- `ParentID` (default) uses the parent component selector.
- `WindowURL` uses `window.location.pathname`.
- `Random` generates a UUID.
- `Manual` expects `identifier` input.

## Roadmap
- Start with a single main component export.
- Expand to multiple exports as new facet tooling features land.

## Repository Docs
- `CODEBASE.md` for architecture, services, and data flow.
- `V1_MIGRATION_PLAN.md` for upgrade notes and constraints.

## Docs Map
- Start here: `README.md` (usage, API reference, theming, cookbook, migration/FAQ).
- Architecture: `CODEBASE.md` (data flow, extension points, services).
- Migration details: `V1_MIGRATION_PLAN.md` (upgrade plan and dependency notes).

## API Reference

### Core Models

`FacetDefinition`
| Field | Type | Notes |
| --- | --- | --- |
| `id` | `string` | Unique, stable identifier for the facet. |
| `label` | `string` | Display label shown in the UI. |
| `description` | `string` | Optional helper text shown in the modal. |
| `readonly` | `boolean` | Prevents editing/removal when true. |
| `type` | `FacetDataType` | Defines the editor and chip rendering. |
| `dataType` | `'boolean' | 'number' | 'string' | 'date'` | Optional type hint for downstream consumers. |
| `options` | `FacetValue[] \| Observable<FacetValue[]>` | Static or async options for category facets. |
| `defaultValues` | `FacetValue[]` | Pre-selected values on first load. |
| `typeahead` | `{ provider, debounce?, placeholder? }` | Required for typeahead facets. |
| `fixedFilterType` | `FacetFilterType` | Locks the filter type. |
| `icon` | `string` | Material icon name for the chip. |
| `iconClass` | `string` | Additional class for the icon. |
| `cssClass` | `string` | Adds a class to the facet editor. |
| `placeholder` | `string` | Overrides the input placeholder. |

`FacetValue`
| Field | Type | Notes |
| --- | --- | --- |
| `value` | `string \| number \| boolean \| Date` | Raw value. |
| `label` | `string` | UI label for the value. |
| `count` | `number` | Optional count shown in lists. |

`FacetSelection`
| Field | Type | Notes |
| --- | --- | --- |
| `id` | `string` | Matches the facet definition id. |
| `label` | `string` | Facet label (copied from definition). |
| `type` | `FacetDataType` | Facet type. |
| `filterType` | `FacetFilterType` | Active filter type. |
| `values` | `FacetValue[]` | Active selections or typed values. |
| `definition` | `FacetDefinition` | Original definition for reference. |

`FacetToolkitConfig`
| Field | Type | Notes |
| --- | --- | --- |
| `allowDebugClick` | `boolean` | Enables long-click identity logging. |
| `identifierStrategy` | `FacetIdentifierStrategy` | How storage identity is generated. |
| `loggingCallback` | `(...args) => void` | Logging hook for storage debug. |
| `storage` | `FacetStorageStrategy` | `session`, `local`, or `none`. |

### Enums
`FacetDataType`: `Text`, `Boolean`, `Category`, `CategorySingle`, `Typeahead`, `TypeaheadSingle`, `Date`, `DateRange`  
`FacetFilterType`: `Contains`, `Equals`, `StartsWith`, `EndsWith`, `Between`, `Before`, `After`, `Exact`, `NotContains`, `NotEquals`

## Theming Variants

### Dark Theme Example
```scss
.dark-theme {
  @include mat.all-component-colors($dark-theme);
  @include facetToolkit.color($dark-theme);
}
```

### Custom Typography
```scss
$typography: mat.define-typography-config(
  $font-family: 'IBM Plex Sans',
  $headline-1: mat.define-typography-level(96px, 96px, 300),
  $body-1: mat.define-typography-level(14px, 20px, 400)
);

@include mat.all-component-typographies($typography);
```

### Density Control
```scss
$dense-theme: mat.m2-define-light-theme((
  color: (primary: $primary, accent: $accent),
  density: -1
));

@include mat.all-component-themes($dense-theme);
@include facetToolkit.theme($dense-theme);
```

## Facet Type Cookbook

### Text
```ts
{
  id: 'name',
  label: 'Name',
  type: FacetDataType.Text,
  fixedFilterType: FacetFilterType.Contains,
  placeholder: 'Enter a name'
}
```

### Boolean
```ts
{
  id: 'active',
  label: 'Active',
  type: FacetDataType.Boolean
}
```

### Category (Multi-Select)
```ts
{
  id: 'status',
  label: 'Status',
  type: FacetDataType.Category,
  options: of([
    {value: 'open', label: 'Open', count: 12},
    {value: 'closed', label: 'Closed', count: 3}
  ])
}
```

### Category (Single)
```ts
{
  id: 'priority',
  label: 'Priority',
  type: FacetDataType.CategorySingle,
  options: [
    {value: 'p1', label: 'P1'},
    {value: 'p2', label: 'P2'}
  ]
}
```

### Typeahead
```ts
{
  id: 'city',
  label: 'City',
  type: FacetDataType.Typeahead,
  typeahead: {
    provider: (searchText) => of([
      {value: `${searchText}-a`, label: `${searchText} A`},
      {value: `${searchText}-b`, label: `${searchText} B`}
    ]).pipe(delay(250)),
    placeholder: 'Search cities',
    debounce: 200
  }
}
```

### Typeahead (Single)
```ts
{
  id: 'owner',
  label: 'Owner',
  type: FacetDataType.TypeaheadSingle,
  typeahead: {
    provider: (searchText) => of([
      {value: 'derek', label: 'Derek'},
      {value: 'alex', label: 'Alex'}
    ])
  }
}
```

### Date
```ts
{
  id: 'created',
  label: 'Created Date',
  type: FacetDataType.Date
}
```

### Date Range
```ts
{
  id: 'range',
  label: 'Date Range',
  type: FacetDataType.DateRange
}
```

## Migration Notes (v1)

## What's New in v1
- Standalone-only Angular 19 library built for modern control flow.
- New package name and selector (`@drsutphin/ngx-mat-facet-toolkit`, `ngx-mat-facet-toolkit`).
- Updated config/provider pattern with `provideFacetToolkitConfig`.
- Expanded API docs, theming guidance, and facet cookbook.

### v1 Breaking Changes
- New package name: `@drsutphin/ngx-mat-facet-toolkit`.
- New selector: `ngx-mat-facet-toolkit`.
- Standalone-only: remove `NgxMatFacetSearchModule` usage.
- Updated configuration model names (`FacetToolkitConfig`, `FacetIdentifierStrategy`).
- Control flow uses Angular 19 syntax (`@if`, `@for`, `@switch`).

### Upgrade Checklist
1. Update imports to the new package name.
2. Replace `<ngx-mat-facet-search>` with `<ngx-mat-facet-toolkit>`.
3. Switch to standalone bootstrapping and providers.
4. Move any module-scoped config to `provideFacetToolkitConfig`.
5. Update any custom theming to include the toolkit theme mixins.

### Common Upgrade Recipes

Old module import:
```ts
import {NgxMatFacetSearchModule} from 'ngx-mat-facet-search';

@NgModule({
  imports: [NgxMatFacetSearchModule]
})
export class AppModule {}
```

New standalone import:
```ts
import {NgxMatFacetToolkitComponent} from '@drsutphin/ngx-mat-facet-toolkit';

@Component({
  standalone: true,
  imports: [NgxMatFacetToolkitComponent]
})
export class AppComponent {}
```

Old selector:
```html
<ngx-mat-facet-search></ngx-mat-facet-search>
```

New selector:
```html
<ngx-mat-facet-toolkit></ngx-mat-facet-toolkit>
```

Old provider pattern:
```ts
providers: [
  {provide: FACET_SEARCH_CONFIG, useValue: {storage: 'session'}}
]
```

New provider:
```ts
providers: [
  provideFacetToolkitConfig({storage: 'session'})
]
```

## Troubleshooting & FAQ

### The component does not persist filters.
- Ensure `storage` is not set to `none`.
- Make sure a stable identifier is used (default `ParentID` requires a stable parent selector).
- Verify that `identifier` is only set when `FacetIdentifierStrategy.Manual` is used.

### Typeahead results never show.
- The `typeahead.provider` must return an `Observable<FacetValue[]>`.
- Ensure the provider returns an array (not `null`).
- If using a debounce, confirm the value matches expected search timing.

### Date values render as text.
- The date inputs expect `Date` objects (not strings).
- If you hydrate from JSON, convert to `Date` before passing to the toolkit.

### Facet chips show empty labels.
- Provide `label` on each `FacetValue`.
- Ensure `FacetSelection.values` are set for text/date facets.

### I see “duplicate theming” warnings.
- Ensure the toolkit theme mixins are only included once per theme.
- If you import the toolkit theme in multiple bundles, centralize it in a global theme file.
