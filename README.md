Node Module Starter Kit
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

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

Asynchronously runs starter tasks.

``` javascript
var dir = 'path/to/a/directory';

starter( dir, onCreate );

function onCreate( error ) {
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
*	__holder__: copyright holder (the author and copyright holder may be the different people/organizations).

``` javascript
starter( dir, {
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
}, onCreate );
```


#### starter.sync( dest[, opts ] )

Synchronously runs starter tasks.

``` javascript
starter.sync();
```

The function accepts the same `options` as the asynchronous version.


## Notes

*	The following assets are created...



## Examples

``` javascript
var mkdirp = require( 'mkdirp' ),
	path = require( 'path' ),
	starter = require( '@kgryte/node-module-starter-kit' );

var dirpath;

// Synchronous creation...
dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

mkdirp.sync( dirpath );
starter.sync( dirpath, {
	'name': 'beep',
	'author': 'Jane Doe',
	'email': 'janedoe@example.com',
	'desc': 'Beep boop.',
	'keywords': [
		'beep',
		'boop',
		'bop'
	],
	'cmd': 'beepboop',
	'repo': 'janedoe/beep',
	'license': 'MIT',
	'holder': 'Jane Doe'
});

// Asynchronous creation...
dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

mkdirp.sync( dirpath );
starter( dirpath, {
	'name': 'boop',
	'author': 'John Doe',
	'email': 'johndoe@example.com',
	'desc': 'Boop beep.',
	'keywords': [
		'beep',
		'boop',
		'bop'
	],
	'cmd': 'boopbeep',
	'repo': 'johndoe/beep',
	'license': 'MIT',
	'holder': 'John Doe, Inc'
});
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

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --name [name]         Module name.
  -desc  --description [desc]  Module description.
         --author [author]     Module author.
         --email [email]       Author email.
         --keywords [keywords] Keywords describing the module; e.g., word1,word2,...
         --cmd [cmd]           Command, if module is a CLI tool.
         --repo [repo]         Module repository.
         --license [name]      License. Default: 'MIT'.
         --holder [holder]     Copyright author.
```


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

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

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

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/@kgryte/node-module-starter-kit.svg
[npm-url]: https://npmjs.org/package/@kgryte/node-module-starter-kit

[travis-image]: http://img.shields.io/travis/kgryte/node-module-starter-kit/master.svg
[travis-url]: https://travis-ci.org/kgryte/node-module-starter-kit

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/node-module-starter-kit/master.svg
[codecov-url]: https://codecov.io/github/kgryte/node-module-starter-kit?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/node-module-starter-kit.svg
[dependencies-url]: https://david-dm.org/kgryte/node-module-starter-kit

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/node-module-starter-kit.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/node-module-starter-kit

[github-issues-image]: http://img.shields.io/github/issues/kgryte/node-module-starter-kit.svg
[github-issues-url]: https://github.com/kgryte/node-module-starter-kit/issues
