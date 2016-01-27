'use strict';

var mkdirp = require( 'mkdirp' );
var path = require( 'path' );
var starter = require( './../lib' );

var dirpath;
var opts;

dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

mkdirp.sync( dirpath );

opts = {
	'name': 'boop-beep-bebop',
	'author': 'John Doe',
	'email': 'johndoe@example.com',
	'desc': 'Boop beep bebop.',
	'keywords': [
		'beep',
		'boop',
		'bop'
	],
	'cmd': 'boopbeepbebop',
	'repo': 'johndoe/boop-beep-bebop',
	'license': 'MIT',
	'holder': 'John Doe, Inc',
	'silent': false
};

starter( dirpath, opts, done );

function done( error ) {
	if ( error ) {
		throw error;
	}
}