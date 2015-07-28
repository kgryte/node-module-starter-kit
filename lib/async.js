'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isString = require( 'validate.io-string-primitive' ),
	isFunction = require( 'validate.io-function' ),
	merge = require( 'utils-merge2' )(),
	noop = require( '@kgryte/noop' ),
	validate = require( './validate.js' ),
	defaults = require( './defaults.json' ),
	files = require( './files.js' );


// STARTER //

/**
* FUNCTION: starter( dest[, opts ][, clbk ] )
*	Asynchronously runs starter tasks.
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
* @param {Function} [clbk] - callback to invoke upon creating starter kit
*/
function starter() {
	var args = arguments,
		nargs = args.length,
		count = 0,
		opts = {},
		options,
		nTasks,
		dest,
		clbk,
		err,
		flg,
		i;

	if ( !nargs ) {
		throw new Error( 'starter()::insufficient input arguments. Must provide a file destination.' );
	}
	dest = args[ 0 ];
	if ( !isString( dest ) ) {
		throw new TypeError( 'starter()::invalid input argument. First argument must be a string primitive. Value: `' + dest + '`.' );
	}
	if ( nargs === 1 ) {
		clbk = noop;
	}
	else if ( nargs === 2 ) {
		if ( isObject( args[ 1 ] ) ) {
			options = args[ 1 ];
			clbk = noop;
			flg = true;
		}
		else if ( isFunction( args[ 1 ] ) ) {
			clbk = args[ 1 ];
		}
		else {
			throw new TypeError( 'starter()::invalid input argument. Second argument must either be an options object or a callback. Value: `' + args[ 1 ] + '`.' );
		}
	}
	else {
		options = args[ 1 ];
		clbk = args[ 2 ];
		flg = true;
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'starter()::invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
		}
	}
	if ( flg ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	opts = merge( {}, defaults, opts );

	nTasks = files.length;
	for ( i = 0; i < files.length; i++ ) {
		files[ i ]( dest, opts, done );
	}

	// TODO: include directory creation.
	// TODO: include dir creation in num tasks

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
		if ( count === nTasks ) {
			clbk();
		}
	}
} // end FUNCTION starter()


// EXPORTS //

module.exports = starter;
