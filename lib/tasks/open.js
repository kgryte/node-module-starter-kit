'use strict';

// MODULES //

var shell = require( 'shelljs' );


// OPEN //

/**
* FUNCTION: open( debug )
*	Returns a function to open a specified directory.
*
* @param {Function} debug - debug function
* @returns {Function}
*/
function open( debug ) {
	var log = debug( 'starter-kit:open' );
	/**
	* FUNCTION: open( dest, opts, clbk )
	*	Opens a specified directory.
	*
	* @param {String} dest - destination directory
	* @param {Object} opts - function options
	* @param {Function} clbk - callback function
	* @returns {Void}
	*/
	return function open( dest, options, clbk ) {
		var opts;
		var dir;
		var out;

		if ( options.open === false ) {
			return clbk();
		}
		opts = {};
		opts.silent = options.silent;
		
		// Cache current working directory:
		dir = process.cwd();

		// Move to destination directory:
		out = shell.cd( dest );

		// Open the destination directory:
		log( 'Opening the destination directory...' );
		shell.exec( options.open, opts, done );

		/**
		* FUNCTION: done( code, stdout, stderr )
		*	Callback invoked after executing command.
		*
		* @private
		* @param {Number} code - exit code
		* @param {String} stdout - standard output
		* @param {String} stderr - standard error
		* @returns {Void}
		*/
		function done( code, stdout, stderr ) {
			if ( code !== 0 ) {
				log( 'Error encountered when opening the destination directory: %s', stderr );
				return clbk( new Error( stderr ) );
			}
			// Restore current directory:
			shell.cd( dir );

			log( 'Successfully opened destination directory.' );
			clbk();
		} // end FUNCTION done()
	}; // end FUNCTION open()
} // end FUNCTION open()


// EXPORTS //

module.exports = open;