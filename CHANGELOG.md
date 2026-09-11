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

## [5.0.1] - 2026-09-01

### Fixed

- The Hugo module path has the `/v5` major version suffix ([#788](https://github.com/halogenica/beautifulhugo/pull/788))

## [5.0.0] - 2026-09-01

A large release. It moves the theme to Bootstrap 5, adds a dark mode, and adds
search, a table of contents, callouts, tabs, and more. Only the notable changes
are listed here.

### Breaking

- Bootstrap 5 replaces Bootstrap 3, and the custom dropdown menus use Bootstrap components. Custom CSS and layout overrides can need changes ([#596](https://github.com/halogenica/beautifulhugo/pull/596), [#593](https://github.com/halogenica/beautifulhugo/pull/593), [#612](https://github.com/halogenica/beautifulhugo/pull/612))
- The minimum Hugo version is 0.146.2 ([#607](https://github.com/halogenica/beautifulhugo/pull/607))
- Chroma, which is built in to Hugo, does the syntax highlighting by default. Chroma needs `noClasses = false` ([#599](https://github.com/halogenica/beautifulhugo/pull/599), [#648](https://github.com/halogenica/beautifulhugo/pull/648))
- The CSS files are reorganized around CSS variables ([#626](https://github.com/halogenica/beautifulhugo/pull/626), [#628](https://github.com/halogenica/beautifulhugo/pull/628))
- Dead and duplicate templates are removed ([#771](https://github.com/halogenica/beautifulhugo/pull/771))
- The StumbleUpon share button is removed ([#768](https://github.com/halogenica/beautifulhugo/pull/768))
- jQuery is at version 4 ([#669](https://github.com/halogenica/beautifulhugo/pull/669))

### Added

- Automatic, light, and dark mode, with a selector in the navbar ([#619](https://github.com/halogenica/beautifulhugo/pull/619), [#647](https://github.com/halogenica/beautifulhugo/pull/647))
- Client-side search with Fuse.js ([#729](https://github.com/halogenica/beautifulhugo/pull/729))
- A table of contents panel ([#665](https://github.com/halogenica/beautifulhugo/pull/665))
- Callout and admonition styles ([#700](https://github.com/halogenica/beautifulhugo/pull/700), [#702](https://github.com/halogenica/beautifulhugo/pull/702))
- Tabs, a new mermaid integration, and a `code` shortcode ([#629](https://github.com/halogenica/beautifulhugo/pull/629), [#649](https://github.com/halogenica/beautifulhugo/pull/649), [#709](https://github.com/halogenica/beautifulhugo/pull/709))
- A `beautifulfigure` shortcode and a narrow image mode ([#624](https://github.com/halogenica/beautifulhugo/pull/624), [#661](https://github.com/halogenica/beautifulhugo/pull/661))
- A recipe page type ([#699](https://github.com/halogenica/beautifulhugo/pull/699))
- Utterances and giscus comment support ([#615](https://github.com/halogenica/beautifulhugo/pull/615))
- GitHub buttons on posts ([#613](https://github.com/halogenica/beautifulhugo/pull/613))
- Partial hooks for custom HTML ([#685](https://github.com/halogenica/beautifulhugo/pull/685))
- Per-page settings, optional post dates, and `hidden = true` support ([#714](https://github.com/halogenica/beautifulhugo/pull/714), [#755](https://github.com/halogenica/beautifulhugo/pull/755), [#622](https://github.com/halogenica/beautifulhugo/pull/622))
- Page parameters that control AI summaries ([#564](https://github.com/halogenica/beautifulhugo/pull/564))
- A MathJax switch, and MathJax scroll fixes ([#712](https://github.com/halogenica/beautifulhugo/pull/712), [#715](https://github.com/halogenica/beautifulhugo/pull/715))
- A print stylesheet ([#718](https://github.com/halogenica/beautifulhugo/pull/718))
- Translation of the navbar menu items ([#720](https://github.com/halogenica/beautifulhugo/pull/720))
- Side-arrow post navigation on wide screens ([#727](https://github.com/halogenica/beautifulhugo/pull/727))
- A canonical link in the SEO partial, and a custom home title in the navbar ([#731](https://github.com/halogenica/beautifulhugo/pull/731), [#730](https://github.com/halogenica/beautifulhugo/pull/730))
- ORCID and Google Scholar in the social icon registry ([#617](https://github.com/halogenica/beautifulhugo/pull/617))
- CSS utilities and the `nav-short`, `show-avatar`, and `full-width` page parameters ([#611](https://github.com/halogenica/beautifulhugo/pull/611))

### Changed

- A new example site, with reorganized navigation and deduplicated pages ([#655](https://github.com/halogenica/beautifulhugo/pull/655), [#735](https://github.com/halogenica/beautifulhugo/pull/735))
- PhotoSwipe, KaTeX, Highlight.js, and the fonts are at later versions ([#595](https://github.com/halogenica/beautifulhugo/pull/595), [#662](https://github.com/halogenica/beautifulhugo/pull/662), [#608](https://github.com/halogenica/beautifulhugo/pull/608), [#667](https://github.com/halogenica/beautifulhugo/pull/667))
- Shared partials hold the logic that the templates repeated ([#772](https://github.com/halogenica/beautifulhugo/pull/772), [#773](https://github.com/halogenica/beautifulhugo/pull/773))
- Accessibility is better across the templates ([#602](https://github.com/halogenica/beautifulhugo/pull/602), [#610](https://github.com/halogenica/beautifulhugo/pull/610))
- The CI matrix has 0.163.0 as its upper bound ([#757](https://github.com/halogenica/beautifulhugo/pull/757))

### Fixed

- Sites under a subpath `baseURL` resolve their assets, search index, and image parameters correctly ([#739](https://github.com/halogenica/beautifulhugo/pull/739), [#740](https://github.com/halogenica/beautifulhugo/pull/740), [#742](https://github.com/halogenica/beautifulhugo/pull/742), [#770](https://github.com/halogenica/beautifulhugo/pull/770))
- Paginated pages self-canonicalize, and the breadcrumb and the per-page `pagerSize` work with pagination ([#753](https://github.com/halogenica/beautifulhugo/pull/753), [#756](https://github.com/halogenica/beautifulhugo/pull/756), [#783](https://github.com/halogenica/beautifulhugo/pull/783))
- Templates respect `mainSections`, and hidden pages stay out of the section and term listings ([#692](https://github.com/halogenica/beautifulhugo/pull/692), [#695](https://github.com/halogenica/beautifulhugo/pull/695), [#763](https://github.com/halogenica/beautifulhugo/pull/763))
- The search index is language-specific, and the search results decode HTML entities ([#766](https://github.com/halogenica/beautifulhugo/pull/766), [#747](https://github.com/halogenica/beautifulhugo/pull/747))
- The JSON-LD structured data does not double-escape its HTML entities ([#716](https://github.com/halogenica/beautifulhugo/pull/716))
- MathJax loads when `selfHosted` is on ([#762](https://github.com/halogenica/beautifulhugo/pull/762))
- The `delayDisqus` handler is closed, which removes a JavaScript syntax error ([#764](https://github.com/halogenica/beautifulhugo/pull/764))
- Pages with several authors render all of them ([#706](https://github.com/halogenica/beautifulhugo/pull/706))
- The RSS button links to the feed of the current page ([#687](https://github.com/halogenica/beautifulhugo/pull/687))
- `pageRef` menu entries do not double the language prefix ([#785](https://github.com/halogenica/beautifulhugo/pull/785))
- Several tabs blocks render on one page ([#782](https://github.com/halogenica/beautifulhugo/pull/782))
- The figure shortcodes resolve page-relative paths, and `bigimg` accepts a page resource ([#722](https://github.com/halogenica/beautifulhugo/pull/722), [#787](https://github.com/halogenica/beautifulhugo/pull/787))
- The date format is validated, and it applies to the Staticman comment timestamps ([#673](https://github.com/halogenica/beautifulhugo/pull/673), [#760](https://github.com/halogenica/beautifulhugo/pull/760), [#761](https://github.com/halogenica/beautifulhugo/pull/761))
- The LinkedIn URL supports company pages ([#406](https://github.com/halogenica/beautifulhugo/pull/406))
- The Piwik noscript image uses https ([#765](https://github.com/halogenica/beautifulhugo/pull/765))

## Earlier releases

This file starts at 5.0.0. For the changes in the 3.x releases, refer to the
commit history:

- [3.6.0](https://github.com/halogenica/beautifulhugo/compare/v3.5.0...v3.6.0)
- [3.5.0](https://github.com/halogenica/beautifulhugo/compare/v3.4.0...v3.5.0)
- [3.4.0](https://github.com/halogenica/beautifulhugo/compare/v3.3.0...v3.4.0)
- [3.3.0](https://github.com/halogenica/beautifulhugo/compare/v3.2.0...v3.3.0)
- [3.2.0](https://github.com/halogenica/beautifulhugo/compare/v3.1.0...v3.2.0)
- [3.1.0](https://github.com/halogenica/beautifulhugo/compare/v3.0.0...v3.1.0)

[Unreleased]: https://github.com/halogenica/beautifulhugo/compare/v5.1.0...HEAD
[5.1.0]: https://github.com/halogenica/beautifulhugo/compare/v5.0.1...v5.1.0
[5.0.1]: https://github.com/halogenica/beautifulhugo/compare/v5.0.0...v5.0.1
[5.0.0]: https://github.com/halogenica/beautifulhugo/compare/v3.6.0...v5.0.0
