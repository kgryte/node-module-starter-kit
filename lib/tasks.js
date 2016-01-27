'use strict';

// TASKS //

var TASKS = [
	[
		require( './../plugins/editorconfig.js' ),
		require( './../plugins/gitattributes.js' ),
		require( './../plugins/gitignore.js' ),
		require( './../plugins/jshintignore.js' ),
		require( './../plugins/jshintrc.js' ),
		require( './../plugins/npmignore.js' ),
		require( './../plugins/travisyml.js' ),
		require( './../plugins/license.js' ),
		require( './../plugins/makefile.js' ),
		require( './../plugins/todo.js' ),
		require( './../plugins/readme.js' ),
		require( './../plugins/packagejson.js' ),
		require( './../plugins/example.js' ),
		require( './../plugins/test.js' ),
		require( './../plugins/lib.js' )
	],
	[
		require( './../plugins/git.js' ),
		require( './../plugins/install.js' )
	],
	[
		require( './../plugins/open.js' )
	]
];


// EXPORTS //

module.exports = TASKS;