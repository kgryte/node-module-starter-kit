'use strict';

var mkdirp = require( 'mkdirp' ),
	path = require( 'path' ),
	starter = require( './../lib' );

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

