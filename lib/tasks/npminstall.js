'use strict';

// MODULES //

var shell = require( 'shelljs' );


// NPM INSTALL //

/**
* FUNCTION: npminstall( debug )
*	Returns a function to install NPM modules in a specified directory.
*
* @param {Function} debug - debug function
* @returns {Function}
*/
function npminstall( debug ) {
	var log = debug( 'starter-kit:npm-install' );
	/**
	* FUNCTION: install( dest, opts, clbk )
	*	Installs node modules in a specified directory.
	*
	* @param {String} dest - destination directory
	* @param {Object} opts - function options
	* @param {Function} clbk - callback function
	* @returns {Void}
	*/
	return function install( dest, options, clbk ) {
		var dir;
		var out;

		if ( options.install === false ) {
			return clbk();
		}
		dir = process.cwd();

		// Move to destination directory:
		out = shell.cd( dest );

		// Install node modules:
		log( 'Installing node modules...' );
		shell.exec( 'npm install', done );

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
				log( 'Error encountered when attempting to install node modules: %s', stderr );
				return clbk( new Error( stderr ) );
			}
			// Restore current directory:
			shell.cd( dir );

			log( 'Successfully installed node modules.' );
			clbk();
		} // end FUNCTION done()
	}; // end FUNCTION install()
} // end FUNCTION npminstall()


// EXPORTS //

module.exports = npminstall;