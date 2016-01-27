'use strict';

// MODULES //

var file = require( '@kgryte/readme' );


// README //

/**
* FUNCTION: readme( debug )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} debug - debug function
* @returns {Function}
*/
function readme( debug ) {
	var log = debug( 'starter-kit:readme' );
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
			'template': 'node_module',
			'title': options.name,
			'desc': options.desc,
			'license': options.license,
			'holder': options.holder
		};
		// TODO: filter sections based on whether a `cmd` is provided and whether a module is browser compatible
		
		// Handle options having more stringent requirements...
		if ( options.repo ) {
			opts.repo = options.repo;
		}
		log( 'Creating a `README` file...' );
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
				log( 'Encountered an error when creating a `README` file: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created a `README` file.' );
			clbk();
		}
	}; // end FUNCTION create()
} // end FUNCTION readme()


// EXPORTS //

module.exports = readme;
