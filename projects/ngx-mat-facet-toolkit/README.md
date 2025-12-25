# NgxMatFacetToolkit [![npm version](https://badge.fury.io/js/@drsutphin%2Fngx-mat-facet-toolkit.svg)](https://badge.fury.io/js/@drsutphin%2Fngx-mat-facet-toolkit)
Angular 19 standalone facet filtering toolkit with Material UI.

[Demo](https://128keaton.github.io/NgxMatFacetToolkit/)

[Documentation](https://github.com/drsutphin/NgxMatFacetToolkit)

## Install
```bash
npm install @drsutphin/ngx-mat-facet-toolkit @angular/material @angular/cdk
```

## Quick Start
```ts
import {NgxMatFacetToolkitComponent} from '@drsutphin/ngx-mat-facet-toolkit';
```

```html
<ngx-mat-facet-toolkit
  [facets]="facets"
  (facetChange)="onFacetChange($event)">
</ngx-mat-facet-toolkit>
```

## Theme Setup
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

## API Highlights
- Standalone component: `NgxMatFacetToolkitComponent`
- Events: `facetChange`, `facetRemoved`, `facetReset`
- Models: `FacetDefinition`, `FacetSelection`, `FacetValue`, `FacetDataType`
- Config provider: `provideFacetToolkitConfig`

## v1 Gotchas
- The selector is `ngx-mat-facet-toolkit` (not `ngx-mat-facet-search`).
- This package is standalone-only (no module wrapper).
- Be sure to include the toolkit theme mixins in your global theme.

## Release Notes (v1)
- New package name and selector for the standalone Angular 19 version.
- Config provider: `provideFacetToolkitConfig`.
- Expanded docs with API reference, theming guidance, and cookbook examples.

See the repository README for the full API reference, theming variants, and facet type cookbook.
