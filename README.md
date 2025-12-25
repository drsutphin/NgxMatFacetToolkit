# NgxMatFacetToolkit [![npm version](https://badge.fury.io/js/@drsutphin%2Fngx-mat-facet-toolkit.svg)](https://badge.fury.io/js/@drsutphin%2Fngx-mat-facet-toolkit)
Angular 19 standalone facet filtering toolkit with Material UI.

[Demo](https://128keaton.github.io/NgxMatFacetToolkit/)

## Usage

### Getting Started
1. Import the standalone component and optional provider:
```typescript
import {NgxMatFacetToolkitComponent, provideFacetToolkitConfig} from '@drsutphin/ngx-mat-facet-toolkit';

bootstrapApplication(AppComponent, {
  providers: [
    provideFacetToolkitConfig({
      identifierStrategy: FacetIdentifierStrategy.ParentID
    })
  ]
});
```

2. Provide an array of `FacetDefinition` type:
```typescript
  // Facet Definitions
  // You can either define and configure your facets as static object array,
  // or you can generate dynamically based on your data from back end.
  public facets: Array<FacetDefinition> = [
    {
      id: 'user-name',
      label: 'User Name',
      type: FacetDataType.Text,
      description: 'Please enter your user name (simple text input example)',
      icon: 'person_outline'
    }, {
      id: 'birthday',
      label: 'Birthday',
      icon: 'date_range',
      description: 'Please select your birthday (date select example)',
      type: FacetDataType.Date,
    },
    {
      id: 'event-days',
      label: 'Event Days',
      icon: 'event_available',
      description: 'Please select start and end dates (date range select example)',
      type: FacetDataType.DateRange,
    },
    {
      id: 'is-participant',
      label: 'Is a Participant?',
      icon: 'live_help',
      description: 'This is a test field, you can test boolean data type.',
      type: FacetDataType.Boolean,
    },
    {
      id: 'state',
      label: 'State',
      description: 'Please select something (single select, http example)',
      type: FacetDataType.CategorySingle,
      icon: 'folder_open',
      /* mock http service call  */
      options: of([
        {value: 'open', label: 'Open', count: 49},
        {value: 'closed', label: 'Closed', count: 23}
      ]).pipe(delay(700))
    },
    {
      id: 'license',
      label: 'License(s)',
      description: 'Please select your licenses (multi select, http example)',
      type: FacetDataType.Category,
      icon: 'drive_eta',
      /* mock http service call  */
      options: of([
        {value: 'a', label: 'Class A'},
        {value: 'b', label: 'Class B'},
        {value: 'c', label: 'Class C'}
      ]).pipe(delay(1200))
    },
    {
      id: 'city',
      label: 'Cities',
      description: 'Please select from cities.',
      type: FacetDataType.Typeahead,
      icon: 'location_city',
      typeahead: {
       provider: (txt) => {
         return  of([
           {value: txt + '-a', label: txt + ' A'},
           {value: txt + '-b', label: txt + ' B'},
           {value: txt + '-c', label: txt + ' C'}
         ]).pipe(delay(1200));
       },
      }
    }
  ];
```

3. Render the component and listen for outputs:
```html
<ngx-mat-facet-toolkit
  [facets]="facets"
  [config]="{ storage: 'session' }"
  (facetChange)="onFacetChange($event)"
  (facetRemoved)="onFacetRemoved($event)"
  (facetReset)="onFacetReset()">
</ngx-mat-facet-toolkit>
```

### Storage/Identities
By default, NgxMatFacetToolkit will save selected facets in `sessionStorage` using the parent component's selector as a base identifier.
For example, a component with the selector `app-home-page` results in the facet's identifier being `app-home-page-facet`.

#### Generation Strategies:
* Parent ID _(default)_ - Uses the parent component's selector for identity generation
* Random - Uses `uuidv4` (if installed) to generate an identifier. This is useful for if you want very fine control over what is saved or not.
* Window URL _(not recommended)_* - Uses the current URL to generate an identifier. `/app/home/base` becomes `app-home-base-facet`. 
* None - Disables saving in storage

You can override this setting in the configuration (see below).

\* Note on Window URL: If the component tries to load before the route is fully resolved, or you have some weird URL thing going on, 
the same ID per component might not be used. This is why I moved to the `Parent ID` strategy by default.

### Configuration

#### Basic
Most of the simple options can be configured directly through the component itself in the template:

* `facets` - `FacetDefinition[]` - An array of Facets to provide. Default: `[]`
* `placeholder` - `string` - A string value for the empty/new Facet button. Default: `Filter Table`
* `clearButtonText` - `string` - A string value for the clear Facets button. Default: `Clear Filters`
* `clearButtonEnabled` - `boolean` - A true/false value to indicate whether to show or hide the clear Facets Button. Default: `true`
* `dateFormat` - `string` - A string value notating the date format in date-specific Facets. Default: `M/d/yyyy`
* `tooltip` - `string` - A string value containing tooltip text that appears when you over the filter icon. Default: `null`
* `displayFilterIcon` - `boolean` - A true/false value to indicate whether to show or hide the filter icon. Default: `true`
* `facetWidth` - `string` - A pixel value (notated with `px` at the end) that refers to the width of the Facet panel. Default: `400px`
* `facetHasBackdrop` - `boolean` - A true/false value to indicate whether the Facet panel has a backdrop. Default: `true`
* `confirmOnRemove` - `boolean` - A true/false value which corresponds to prompting the user when they delete a Facet. Default: `true`
* `chipLabelsEnabled` - `boolean` - A true/false value to indicate whether the Facet button shows its label. Default: `true`
* `identifier` - `string` - A string value that contains a unique but persistent ID for the Facet Search component. Default: `null` (see above).
* `config` - `Partial<FacetToolkitConfig>` - Per-instance config overrides (see below).

Outputs:
* `facetChange` - `FacetSelection[]` - Emits normalized selections whenever state changes.
* `facetRemoved` - `FacetSelection` - Emits when a facet is removed.
* `facetReset` - `void` - Emits when filters are cleared.

#### Advanced

You can also inject defaults via provider:

* `allowDebugClick` - `boolean` - A true/false value that, when enabled, allows the user to long click on the filter icon, which results in
the component's identifier being printed in the console. Default: `true`
* `cookieExpiresOn` - `number` - A number which refers to the number of days before the cookie expires. Default: `1`
* `identifierStrategy` - `FacetIdentifierStrategy` - A value which contains the FacetIdentifierStrategy value being used. Default: `FacetIdentifierStrategy.ParentID` (see above)
* `loggingCallback` - `(...args) => void` - A value which contains a function callback for logging. Default: `() => {}`

Inside your module/component providers, you can easily pass configuration to the child Facet Search Components:

```typescript
providers: [
  provideFacetToolkitConfig({
    loggingCallback: (...args) => {
      console.log(...args) // Log output to the console
    },
    identifierStrategy: FacetIdentifierStrategy.ParentID, // Use the parent ID strategy
    storage: 'session'
  })
]
```

You can also override config per instance:
```typescript
<ngx-mat-facet-toolkit
  [facets]="facets"
  [config]="{ identifierStrategy: FacetIdentifierStrategy.Random }">
</ngx-mat-facet-toolkit>
```
