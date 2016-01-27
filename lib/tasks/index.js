'use strict';

// TASKS //

var TASKS = [
	[
		require( './editorconfig.js' ),
		require( './gitattributes.js' ),
		require( './gitignore.js' ),
		require( './jshintignore.js' ),
		require( './jshintrc.js' ),
		require( './npmignore.js' ),
		require( './travisyml.js' ),
		require( './license.js' ),
		require( './makefile.js' ),
		require( './todo.js' ),
		require( './readme.js' ),
		require( './packagejson.js' ),
		require( './example.js' ),
		require( './test.js' ),
		require( './lib.js' )
	],
	[
		require( './git.js' ),
		require( './npminstall.js' )
	]
];


// EXPORTS //

module.exports = TASKS;