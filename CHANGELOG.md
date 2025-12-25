# 1.0.3
* Fixed:
  * Trusted Publisher configuration corrected to allow npm publish

# 1.0.2
* Fixed:
  * GitHub Pages deployment switched to Actions-based deployment

# 1.0.1
* Improved:
  * GitHub Actions workflows updated for docs, CI, and npm Trusted Publisher publishing

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
