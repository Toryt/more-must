# More Must

_GNU Affero General Public License v3.0 or later, © 2018 Jan Dockx_

Extensions to [Must] (© 2013 Andri Möll).

## Install

// MUDO

## Usage

// MUDO

## API

// MUDO

## Notes

### SPDX

`npm` (version 3.10.10!) warns

> @toryt/more-must@1.0.0-pre.0 license should be a valid SPDX license expression

[Yet it is.](https://spdx.org/licenses/AGPL-3.0-or-later.html) Don't worry. This is probably a version issue.

### `legally` and `tldrlegal`

These reports cannot currently be used. The latest version of `legally` (currently 3.2.1) cannot be used, because it
uses `async`, and this package still has to work on node 6, which doesn't support that yet. Earlier versions cannot be
used, because they suffer from a bug for [modules-in-modules](https://github.com/franciscop/legally/issues/17).

[must]: https://github.com/moll/js-must
