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
* @param {Boolean} [opts.install=true] - boolean indicating whether to run installation tasks
* @param {String|Boolean} [opts.open="subl ."] - command to open a destination directory or `false`
* @param {Boolean} [opts.silent=false] - boolean indicating whether to turn off verbose logging
* @param {Function} [clbk] - callback to invoke upon creating starter kit
*/
function starter() {
	var options;
	var nPhases;
	var logger;
	var nargs;
	var tasks;
	var args;
	var opts;
	var dest;
	var clbk;
	var log;
	var err;
	var idx;

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
		logger = require( './logger.js' );
	} else {
		process.env.DEBUG = '*';
		logger = require( 'debug' );
	}
	log = logger( 'starter-kit:main' );

	tasks = getTasks( logger );
	nPhases = tasks.length;
	idx = 0;

	log( 'Beginning tasks for phase %d of %d...', idx+1, nPhases );
	execTasks( tasks[ idx ], next );

	/**
	* FUNCTION: execTasks( tasks, clbk )
	*	Executes tasks.
	*
	* @private
	* @param {Function[]} tasks - task array
	* @param {Function} clbk - callback to invoke after completing tasks
	* @returns {Void}
	*/
	function execTasks( tasks, clbk ) {
		var count;
		var len;
		var i;

		log( 'Beginning tasks...' );
		len = tasks.length;
		count = 0;
		for ( i = 0; i < len; i++ ) {
			log( 'Beginning task %d of %d...', i+1, len );
			tasks[ i ]( dest, opts, done );
		}
		/**
		* FUNCTION: done( [error] )
		*	Callback invoked upon completing a task.
		*
		* @private
		* @param {Error} [error] - error
		* @returns {Void}
		*/
		function done( error ) {
			if ( error ) {
				return clbk( error );
			}
			count += 1;
			log( 'Finished a task. %d of %d complete.', count, len );
			if ( count === len ) {
				log( 'Finished all tasks.' );
				clbk();
			}
		}
	} // end FUNCTION execTasks()

	/**
	* FUNCTION: next( [error] )
	*	Callback invoked after completing a phase's tasks.
	*
	* @private
	* @param {Error} [error] - error
	* @returns {Void}
	*/
	function next( error ) {
		if ( error ) {
			return clbk( error );
		}
		log( 'All tasks for phase %d are complete.', idx );
		idx += 1;
		if ( idx < nPhases ) {
			log( 'Beginning tasks for phase %d of %d...', idx+1, nPhases );
			return execTasks( tasks[ idx ], next );
		}
		log( 'Finished all task phases.' );
		clbk();
	} // end FUNCTION next()
} // end FUNCTION starter()


// EXPORTS //

module.exports = starter;
