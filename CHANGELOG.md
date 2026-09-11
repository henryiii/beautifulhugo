# Changelog

All notable changes to this theme are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the theme uses
[semantic versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [5.1.0] - 2026-09-11

### Added

- Post preview thumbnails on list pages ([#754](https://github.com/halogenica/beautifulhugo/pull/754))
- Related posts through Hugo's related-content engine ([#775](https://github.com/halogenica/beautifulhugo/pull/775))
- Translation keys for the remaining hardcoded UI strings ([#776](https://github.com/halogenica/beautifulhugo/pull/776))
- Missing keys in German and in all other supplied languages ([#800](https://github.com/halogenica/beautifulhugo/pull/800), [#802](https://github.com/halogenica/beautifulhugo/pull/802))

### Changed

- The head and microdata markup use current standards ([#774](https://github.com/halogenica/beautifulhugo/pull/774))
- Templates share one `mainSections` lookup and one data lookup, and use `GetTerms` ([#789](https://github.com/halogenica/beautifulhugo/pull/789), [#809](https://github.com/halogenica/beautifulhugo/pull/809))
- The head loads one Font Awesome stylesheet and makes one Google Fonts request ([#808](https://github.com/halogenica/beautifulhugo/pull/808))
- Search pagination uses buttons, iframe attributes are tidier, and the deploy workflow uses a later Hugo ([#807](https://github.com/halogenica/beautifulhugo/pull/807))

### Fixed

- `load-photoswipe.js` reads `data-pswp-width` and `data-pswp-height` ([#795](https://github.com/halogenica/beautifulhugo/pull/795))
- `ghCount` and `showPageDates` accept `false`, and the schema cache has a key for each language ([#804](https://github.com/halogenica/beautifulhugo/pull/804))
- Copied code keeps its indentation, and mermaid and search rendering are safer ([#805](https://github.com/halogenica/beautifulhugo/pull/805))
- The Highlight.js dark stylesheet applies through a media query, which prevents a flash ([#806](https://github.com/halogenica/beautifulhugo/pull/806))
- The section panel lists all posts and matches previews by URL ([#810](https://github.com/halogenica/beautifulhugo/pull/810))
- The closed table-of-contents panel stays out of the tab order ([#813](https://github.com/halogenica/beautifulhugo/pull/813))

## Earlier releases

This file starts at 5.1.0. For the changes in earlier releases, refer to the
commit history:

- [5.0.1](https://github.com/halogenica/beautifulhugo/compare/v5.0.0...v5.0.1)
- [5.0.0](https://github.com/halogenica/beautifulhugo/compare/v3.6.0...v5.0.0)
- [3.6.0](https://github.com/halogenica/beautifulhugo/compare/v3.5.0...v3.6.0)
- [3.5.0](https://github.com/halogenica/beautifulhugo/compare/v3.4.0...v3.5.0)
- [3.4.0](https://github.com/halogenica/beautifulhugo/compare/v3.3.0...v3.4.0)
- [3.3.0](https://github.com/halogenica/beautifulhugo/compare/v3.2.0...v3.3.0)
- [3.2.0](https://github.com/halogenica/beautifulhugo/compare/v3.1.0...v3.2.0)
- [3.1.0](https://github.com/halogenica/beautifulhugo/compare/v3.0.0...v3.1.0)

[Unreleased]: https://github.com/halogenica/beautifulhugo/compare/v5.1.0...HEAD
[5.1.0]: https://github.com/halogenica/beautifulhugo/compare/v5.0.1...v5.1.0
