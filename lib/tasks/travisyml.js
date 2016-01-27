'use strict';

// MODULES //

var file = require( '@kgryte/travis-yml' );


// TRAVIS YML //

/**
* FUNCTION: travisyml( logger )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} logger - logger
* @returns {Function}
*/
function travisyml( logger ) {
	var log = logger( 'starter-kit:travisyml' );
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
		log( 'Destination: %s', dest );
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
} // end FUNCTION travisyml()


// EXPORTS //

module.exports = travisyml;
