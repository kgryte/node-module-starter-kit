Node Module Starter Kit
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Node module starter kit.


## Installation

``` bash
$ npm install @kgryte/node-module-starter-kit
```


## Usage

``` javascript
var starter = require( '@kgryte/node-module-starter-kit' );
```

#### starter( dest[, opts ][, clbk ] )

Runs starter tasks.

``` javascript
var dir = 'path/to/a/directory';

starter( dir, done );

function done( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Success!' );
}
```

The function accepts the following `options`:
*	__name__: module name.
*	__desc__: module description.
*	__author__: module author.
*	__email__: author email address.
*	__keywords__: keywords describing the module.
*	__cmd__: command name, if module is a CLI tool.
*	__repo__: module Github repository.
*	__license__: module license.
*	__holder__: copyright holder (the author and copyright holder may be different people/organizations).
*	__browser__: `boolean` indicating whether a module is browser compatible. Default: `true`.
*	__git__: `boolean` indicating whether to initialize a local Git repository. Default: `true`.
*	__remote__: `boolean` indicating whether to create a remote Github repository. Default: `true`.
*	__star__: `boolean` indicating whether to star a remote Github repository. Default: `true`.
*	__ci__: `boolean` indicating whether to initialize continuous integration. Default: `true`.
*	__open__: `boolean` indicating whether to open the module directory in a text editor. Default: `true`. 	
*	__silent__: `boolean` indicating whether to silence verbose logging. Default: `false`.


``` javascript
opts = {
	'name': 'example',
	'desc': 'An example module.',
	'author': 'Jane Doe',
	'email': 'janedoe@example.com',
	'keywords': [
		'beep',
		'boop',
		'bop'
	],
	'cmd': 'eg',
	'repo': 'janedoe/example',
	'license': 'MIT',
	'holder': 'D&D, Inc'
};

starter( dir, opts, done );

function done( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Success!' );
}
```


## Notes

*	The following assets are created...
	- 	[.gitignore][gitignore]
	- 	[.gitattributes][gitattributes]
	- 	[.editorconfig][editorconfig]
	- 	[.jshintrc][jshintrc]
	- 	[.jshintignore][jshintignore]
	- 	[.npmignore][npmignore]
	- 	[.travis.yml][travis-yml]
	- 	[Makefile][makefile]
	- 	[LICENSE][license]
	- 	[TODO.md][todo]
	- 	[README.md][readme]
	- 	[package.json][package-json]
	- 	[./test/test.js][test-snippet]
	-	[./lib/index.js][module-snippet]
	-	[./examples/index.js][examples-snippet]



## Examples

``` javascript

```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## CLI


### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g @kgryte/node-module-starter-kit
```


### Usage

``` bash
Usage: nodemodule [options] [destination]

Options:

  -h,     --help                Print this message.
  -V,     --version             Print the package version.
          --name name           Module name.
  -desc,  --description desc    Module description.
          --author author       Module author.
          --email email         Author email.
          --keywords keywords   Keywords describing module; e.g., word1,word2,...
          --cmd cmd             Command-line interface command.
          --repo repo           Module repository.
          --license name        License. Default: 'MIT'.
          --holder holder       Copyright author.
          --no-browser          Module is not browser compatible.
          --no-git              Do not initialize a git repository.
          --no-remote           Do not initialize a remote git repository.
          --no-star             Do not star the remote git repository.
          --no-ci               Do not initialize continuous integration.
          --no-open             Do not open module directory in a text editor.
          --silent              Do not display verbose logging.
```


### Notes

*	By default, the `destination` directory is the current working directory.


### Examples

``` bash
$ cd ~/my/project/directory
$ nodemodule
# => runs starter tasks in the current working directory
```

To specify a destination other than the current working directory, provide a `destination`.

``` bash
$ nodemodule ./../some/other/directory
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015-2016. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/@kgryte/node-module-starter-kit.svg
[npm-url]: https://npmjs.org/package/@kgryte/node-module-starter-kit

[build-image]: http://img.shields.io/travis/kgryte/node-module-starter-kit/master.svg
[build-url]: https://travis-ci.org/kgryte/node-module-starter-kit

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/node-module-starter-kit/master.svg
[coverage-url]: https://codecov.io/github/kgryte/node-module-starter-kit?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/node-module-starter-kit.svg
[dependencies-url]: https://david-dm.org/kgryte/node-module-starter-kit

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/node-module-starter-kit.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/node-module-starter-kit

[github-issues-image]: http://img.shields.io/github/issues/kgryte/node-module-starter-kit.svg
[github-issues-url]: https://github.com/kgryte/node-module-starter-kit/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul

[gitignore]: https://github.com/kgryte/gitignore
[gitattributes]: https://github.com/kgryte/gitattributes
[editorconfig]: https://github.com/kgryte/editorconfig
[jshintrc]: https://github.com/kgryte/jshintrc
[jshintignore]: https://github.com/kgryte/jshintignore
[npmignore]: https://github.com/kgryte/npmignore
[travis-yml]: https://github.com/kgryte/travis-yml
[makefile]: https://github.com/kgryte/makefile
[license]: https://github.com/kgryte/license
[todo]: https://github.com/kgryte/todo
[readme]: https://github.com/kgryte/readme
[package-json]: https://github.com/kgryte/package-json
[test-snippet]: https://github.com/kgryte/test-snippet
[module-snippet]: https://github.com/kgryte/node-module-snippet
[examples-snippet]: https://gitub.com/kgryte/examples-snippet

