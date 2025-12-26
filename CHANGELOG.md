# 1.0.19
* Added:
  * Preset system with save/load/manage flows and storage callbacks
  * Preset delete confirmation modal
* Fixed:
  * Preset menu behavior and centered modal arrow handling
  * Chip row scrollbar visibility and spacing
  * Dark mode styling improvements and demo background
  * Demo toolbar height and output overflow stability

# 1.0.18
* Added:
  * Dark mode toggle in demo toolbar
  * Roadmap document with theming override note
* Fixed:
  * Filter count badge styling and chip row scrolling

# 1.0.17
* Fixed:
  * Add filter pill sizing and contrast tuned to match chips
  * Backspace/delete works in filter input
  * Enter submits facets for non-text types
  * Datepicker uses native adapter provider
* Added:
  * Numeric facet type with comparison filters and demo example
* Changed:
  * Demo layout restored to side-by-side Settings/Output

# 1.0.16
* Fixed:
  * Publish workflow now uses read/write npm token

# 1.0.0
* Breaking:
  * New package name: @drsutphin/ngx-mat-facet-toolkit
  * New selector: ngx-mat-facet-toolkit
  * Standalone-only Angular 19 version (no module wrapper)
* Added:
  * New configuration provider: provideFacetToolkitConfig
  * Expanded API reference, theming guidance, and facet cookbook docs

# 0.6.1
* Fixed:
  * Multi-select/typeahead facets only allowing options to be selected once and not de-selected
  
# 0.6.0
* Fixed:
  * Facets not clearing output when changing available facets
  
# 0.5.9
* Improved:
  * Layout on text facet search
  
# 0.5.8
* Fixed:
  * Criteria type in text facet not able to be saved/updated after initially setting it
  
# 0.5.7
* Fixed:
  * Boolean value not able to be saved/updated

# 0.4.8
* Fixed:
  * Reverts change made in 0.4.7 to calculate Y offset of modal
  
# 0.4.7
* Fixed:
  * Offset of modal dialog was off in some weird cases
  
* Improved:
  * Offset of modal dialog on smaller screens

# 0.4.5 + 0.4.6
* Fixed: 
  * Offset of modal dialog was off in some weird cases

# 0.4.4
* Fixed:
  * Typeahead not working correctly (throwing error and loading twice)
  

# 0.4.3
* Fixed: 
  * Input fields not becoming focused when modal pops up.
  * Typeahead filtering was not working properly.
  * Arrow keys would not select list options in category.
  
* Improved:
  * Animations refined further.
  * Styling of some elements further refined.
  
# 0.4.2
* Fixed: Searching in typeahead showed no label

# 0.4.1
* New: Animations for adding/removing facet chip
* Fixed:
  * Large typeahead lists not scrolling
  
* Improved: Removed Angular Flex Layout Dependency
