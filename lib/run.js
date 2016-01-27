'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );
var isString = require( 'validate.io-string-primitive' );
var isFunction = require( 'validate.io-function' );
var copy = require( 'utils-copy' );
var noop = require( '@kgryte/noop' );
var validate = require( './validate.js' );
var defaults = require( './defaults.json' );
var getTasks = require( './get_tasks.js' );


// STARTER //

/**
* FUNCTION: starter( dest[, opts ][, clbk ] )
*	Runs starter tasks.
*
* @param {String} dest - destination directory
* @param {Object} [opts] - function options
* @param {String} [opts.name=""] - module name
* @param {String} [opts.author=""] - module author
* @param {String} [opts.email=""] - author email
* @param {String} [opts.desc=""] - module description
* @param {String[]} [opts.keywords=[]] - module keywords
* @param {String} [opts.cmd=""] - command
* @param {String} [opts.repo=""] - module Github repository
* @param {String} [opts.license="MIT"] - license
* @param {String} [opts.holder=""] - copyright holder
* @param {Boolean} [opts.browser=true] - boolean indicating whether the module is browser compatible
* @param {Boolean} [opts.git=true] - boolean indicating whether to initialize a local git repository
* @param {Boolean} [opts.remote=true] - boolean indicating whether to initialize a remote git repository
* @param {Boolean} [opts.star=true] - boolean indicating whether to star a remote git repository
* @param {Boolean} [opts.ci=true] - boolean indicating whether to initialize continuous integration
* @param {Boolean} [opts.open=true] - boolean indicating whether to open the module directory in a text editor
* @param {Boolean} [opts.silent=false] - boolean indicating whether to turn off verbose logging
* @param {Function} [clbk] - callback to invoke upon creating starter kit
*/
function starter() {
	var options;
	var nTasks;
	var debug;
	var count;
	var nargs;
	var tasks;
	var args;
	var opts;
	var dest;
	var clbk;
	var log;
	var err;
	var i;

	args = arguments;
	nargs = args.length;
	if ( !nargs ) {
		throw new Error( 'insufficient input arguments. Must provide a file destination.' );
	}
	dest = args[ 0 ];
	if ( !isString( dest ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string primitive. Value: `' + dest + '`.' );
	}
	if ( nargs === 1 ) {
		clbk = noop;
	}
	else if ( nargs === 2 ) {
		if ( isObject( args[ 1 ] ) ) {
			options = args[ 1 ];
			clbk = noop;
		}
		else if ( isFunction( args[ 1 ] ) ) {
			clbk = args[ 1 ];
		}
		else {
			throw new TypeError( 'invalid input argument. Second argument must either be an options object or a callback. Value: `' + args[ 1 ] + '`.' );
		}
	}
	else {
		options = args[ 1 ];
		clbk = args[ 2 ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
		}
	}
	opts = copy( defaults );
	if ( options ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.silent === true ) {
		debug = require( './debug.js' );
	} else {
		process.env.DEBUG = '*';
		debug = require( 'debug' );
	}
	log = debug( 'starter-kit:main' );

	tasks = getTasks( debug );
	nTasks = tasks.length;

	log( 'Beginning tasks...' );

	count = 0;
	for ( i = 0; i < nTasks; i++ ) {
		log( 'Beginning task %d of %d...', i+1, nTasks );
		tasks[ i ]( dest, opts, done );
	}

	// TODO: include git remote task
	// TODO: include ci task
	// TODO: include star task
	// TODO: include open task
	// TODO: include npm install task

	/**
	* FUNCTION: done( error )
	*	Callback invoked after performing each starter task.
	*
	* @private
	*/
	function done( error ) {
		if ( error ) {
			return clbk( error );
		}
		count += 1;
		log( 'Finished a task. %d of %d complete.', count, nTasks );
		if ( count === nTasks ) {
			log( 'Finished all tasks.' );
			clbk();
		}
	}
} // end FUNCTION starter()


// EXPORTS //

module.exports = starter;
