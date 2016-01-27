'use strict';

// MODULES //

var file = require( '@kgryte/license' );


// CREATE //

/**
* FUNCTION: create( debug )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} debug - debug function
* @returns {Function}
*/
function create( debug ) {
	var log = debug( 'starter-kit:license' );
	/**
	* FUNCTION: create( dest, opts, clbk )
	*	Creates a file in a specified directory.
	*
	* @param {String} dest - destination directory
	* @param {Object} opts - function options
	* @param {Function} clbk - callback function
	* @returns {Void}
	*/
	return function create( dest, options, clbk ) {
		var opts = {
			'template': options.license,
			'holder': options.holder
		};
		log( 'Creating a `LICENSE` file...' );
		log( 'Options: %s', JSON.stringify( opts ) );
		file( dest, opts, done );

		/**
		* FUNCTION: done( [error] )
		*	Callback invoked after creating a file.
		*
		* @private
		* @param {Error} [error] - error
		* @returns {Void}
		*/
		function done( error ) {
			if ( error ) {
				log( 'Encountered an error when creating a `LICENSE` file: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created a `LICENSE` file.' );
			clbk();
		}
	}; // end FUNCTION create()
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
