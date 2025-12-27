# Session Recap - 2025-12-27

## Presets and UI
- Implemented preset models, storage service, and config wiring.
- Added preset menu with save/load/manage flows and modal dialogs (name, manage, delete).
- Centered preset manager modal and removed the pointer arrow when centered.
- Added Angular-styled confirmation modal for removing filters (replaces browser confirm).

## Demo and UX
- Diagnosed toolbar height shift (output card overflow); locked toolbar height and constrained output scrolling.
- Added a demo facet to validate overflow behavior.
- Hid chip row scrollbar until overflow and added dynamic bottom spacing based on scrollbar presence.
- Improved dark mode styling and set dark demo page background.

## Docs and Release
- Updated README demo link and added Numeric facet example.
- Added presets section and corrected config/model references in README.
- Added release notes for v1.0.19–v1.0.21.
- Built demo site to `docs/` for GitHub Pages.

## Releases and Tags
- Released v1.0.19, v1.0.20, v1.0.21, v1.0.22, and v1.0.23.
- Fixed CI ResizeObserver errors and re-released with guard.
- Tagged and pushed releases (latest tag: v1.0.23).

## Misc
- Added .gitignore entry for AGENTS.md and committed.

## Commands Run
- npm run test
- npm run build
- npm run build-demo
- git tag / git push
