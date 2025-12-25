# NgxMatFacetToolkit v1 Migration Blueprint

## Goals
- New package: `@drsutphin/ngx-mat-facet-toolkit`
- New selector: `ngx-mat-facet-toolkit`
- Standalone-only, Angular 19 patterns (signals + new control flow).
- Hybrid config API: provider defaults + per-instance overrides.
- Breaking v1 API for flexibility and long-term growth.

## Public API Design (Proposed)

### Main Component
- `NgxMatFacetToolkitComponent` (standalone)
- Selector: `<ngx-mat-facet-toolkit>`

### Component Inputs/Outputs (signals)
Inputs (signal-based):
- `facets`: `FacetDefinition[]`
- `placeholder`: `string`
- `clearButtonText`: `string`
- `clearButtonEnabled`: `boolean`
- `dateFormat`: `string`
- `tooltip`: `string | null`
- `displayFilterIcon`: `boolean`
- `facetWidth`: `string`
- `facetHasBackdrop`: `boolean`
- `confirmOnRemove`: `boolean`
- `chipLabelsEnabled`: `boolean`
- `identifier`: `string | null`
- `config`: `Partial<FacetToolkitConfig>` (optional per-instance overrides)

Outputs:
- `facetChange`: emits normalized `FacetSelection[]` (replacement for `searchUpdated`)
- `facetRemoved`: emits `FacetSelection` (optional, for fine-grained consumers)
- `facetReset`: emits `void` when filters are cleared

### Configuration (Hybrid)
Provider:
- `provideFacetToolkitConfig(config: Partial<FacetToolkitConfig>)`

Per instance:
- `config` input overrides provider defaults for this component.

### Models (Breaking Changes)
Current names to evolve:
- `Facet` -> `FacetDefinition`
- `FacetOption` -> `FacetValue`
- `FacetResult` -> internal (not public)

New model shape (proposed):
- `FacetDefinition`
  - `id: string` (stable identifier, required)
  - `label: string`
  - `description?: string`
  - `type: FacetDataType`
  - `dataType?: 'boolean' | 'number' | 'string' | 'date'`
  - `options?: Observable<FacetValue[]> | FacetValue[]`
  - `typeahead?: { provider: (text: string) => Observable<FacetValue[]>; debounce?: number; placeholder?: string }`
  - `fixedFilterType?: FacetFilterType`
  - `icon?: string`
  - `cssClass?: string`
  - `placeholder?: string`

- `FacetValue`
  - `value: string | number | boolean | Date`
  - `label?: string`
  - `count?: number`
  - `meta?: Record<string, unknown>`

- `FacetSelection`
  - `id: string`
  - `type: FacetDataType`
  - `filterType?: FacetFilterType`
  - `values: FacetValue[]`

## Implementation Phases

### Phase 1: Package + Namespace Rewrite
- Rename project to `ngx-mat-facet-toolkit`.
- Update `package.json`, `projects/*/package.json`, and public API exports.
- Update selector from `ngx-mat-facet-search` to `ngx-mat-facet-toolkit`.

### Phase 2: Standalone Conversion
- Convert all components, pipes, directives to `standalone: true`.
- Remove `NgxMatFacetSearchModule`.
- Export only standalone component + models.
- Update demo app to standalone bootstrapping and imports.

### Phase 3: Signals and Control Flow
- Replace component state (`selectedFacets`, `availableFacets`, `filteredFacets`) with signals.
- Use `computed` for derived state and `effect` for persistence.
- Replace `*ngIf`/`*ngFor` with `@if`/`@for`.
- Replace RxJS event wiring where signals are a better fit (keep RxJS for async typeahead).

### Phase 4: Configuration API
- Introduce `provideFacetToolkitConfig` and `FacetToolkitConfig`.
- Merge provider defaults with per-instance `config` input.
- Remove legacy `FACET_CONFIG` injection token from public API.

### Phase 5: Storage + Identity
- Move to explicit storage strategy in config:
  - `storage: 'session' | 'local' | 'none'`
  - `identifierStrategy: 'parent' | 'url' | 'random' | 'manual'`
- Use the new config in effects (signals) rather than imperative calls.

### Phase 6: Demo + Documentation
- Update demo app to use the new API and selector.
- Refresh README examples with v1 usage.
- Add migration guide for v0.x users (separate doc).

## Breaking Changes Summary
- New package + component name + selector.
- Standalone-only, no NgModule.
- Renamed models and event outputs.
- New config API (provider + per-instance overrides).
- Storage behavior and identity strategy expressed via new config.

## Roadmap (Post-v1)
1) Split into multiple exports (first milestone):
   - `FacetSearchBarComponent`
   - `FacetChipsComponent`
   - `FacetPanelComponent`
2) Advanced filtering (facet groups, nested facets, AND/OR logic).
3) Facet persistence plugins (custom storage backends).
4) Accessibility and keyboard navigation enhancements.

