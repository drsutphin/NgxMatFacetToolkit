# Release Checklist

## Prep
- Confirm working tree is clean.
- Update `projects/ngx-mat-facet-toolkit/package.json` version.
- Update `CHANGELOG.md`.
- Run `npm run build`.

## Release
- Commit changes with a release message (example: `Release vX.Y.Z`).
- Push `main`.
- Tag the release (example: `vX.Y.Z`).
- Push the tag to trigger npm publish.

## Verify
- Confirm GitHub Actions `Publish` job succeeds.
- Verify npm version: `npm view @drsutphin/ngx-mat-facet-toolkit version`.
- Create GitHub Release with notes from `CHANGELOG.md`.
