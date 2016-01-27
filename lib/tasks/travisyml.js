'use strict';

// MODULES //

var file = require( '@kgryte/travis-yml' );


// CREATE //

/**
* FUNCTION: create( debug )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} debug - debug function
* @returns {Function}
*/
function create( debug ) {
	var log = debug( 'starter-kit:travisyml' );
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
			'template': 'nodejs'
		};
		log( 'Creating a `.travis.yml` file...' );
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
				log( 'Encountered an error when creating a `.travis.yml` file: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created a `.travis.yml` file.' );
			clbk();
		}
	}; // end FUNCTION create()
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
