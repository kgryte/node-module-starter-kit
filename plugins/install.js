'use strict';

// MODULES //

var shell = require( 'shelljs' );


// INSTALL //

/**
* FUNCTION: install( logger )
*	Returns a function to run installation tasks in a specified directory.
*
* @param {Function} logger - logger
* @returns {Function}
*/
function install( logger ) {
	var log = logger( 'starter-kit:install' );
	/**
	* FUNCTION: install( dest, opts, clbk )
	*	Runs installation tasks in a specified directory.
	*
	* @param {String} dest - destination directory
	* @param {Object} opts - function options
	* @param {Function} clbk - callback function
	* @returns {Void}
	*/
	return function install( dest, options, clbk ) {
		var opts;
		var dir;
		var out;

		if ( options.install === false ) {
			return clbk();
		}
		opts = {};
		opts.silent = options.silent;
		
		// Cache current working directory:
		dir = process.cwd();

		// Move to destination directory:
		out = shell.cd( dest );

		// Run installation tasks:
		log( 'Running installation...' );
		shell.exec( 'make install', opts, done );

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
				log( 'Error encountered during installation: %s', stderr );
				return clbk( new Error( stderr ) );
			}
			// Restore current directory:
			shell.cd( dir );

			log( 'Successfully ran installation.' );
			clbk();
		} // end FUNCTION done()
	}; // end FUNCTION install()
} // end FUNCTION install()


// EXPORTS //

module.exports = install;