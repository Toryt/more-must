# More Must

[![Build Status](https://travis-ci.org/Toryt/more-must.svg?branch=master)](https://travis-ci.org/Toryt/more-must)

_GNU Affero General Public License v3.0 or later, © 2018 Jan Dockx_

Extensions to [Must] (© 2013 Andri Möll).

## Install

// MUDO

## Usage

// MUDO

## API

// MUDO

## Development

Node 6, 8 and 10 are supported. This is checked because the code is tested on 
[Travis](https://travis-ci.org/Toryt/more-must) with the latest versions of these major versions.

Development is currently done in Node 8 (see [`.nvmrc`](.nvmrc)). It cannot be done in Node 6 anymore.
[Travis](https://travis-ci.org/Toryt/more-must) uses the command `npm ci` to test in Node 8 and Node 10, instead of
`npm test`. `npm ci` requires a more advanced version of [`npm-shrinkwrap.json`](npm-shrinkwrap.json) or 
[`package-lock.json`] than the version of `npm` shipped with Node 6 can generate. 

The [`npm-shrinkwrap.json`](npm-shrinkwrap.json) in this repo is generated with `npm` 6.4.1 from Node 8.12.0. This actually is a
[`package-lock.json`], which is backward compatible.

## TODO

* documentation
* finish and verify `index.d.ts`

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
