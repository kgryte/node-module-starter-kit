'use strict';

// MODULES //

var file = require( '@kgryte/package-json' );


// PACKAGE JSON //

/**
* FUNCTION: packagejson( debug )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} debug - debug function
* @returns {Function}
*/
function packagejson( debug ) {
	var log = debug( 'starter-kit:packagejson' );
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
			'template': 'default',
			'desc': options.desc,
			'author': options.author,
			'cmd': options.cmd
		};
		// TODO: specify template according to whether a module is browser compatible and whether proxyquire is needed

		// Handle options having more stringent requirements...
		if ( options.name ) {
			opts.name = options.name;
		}
		if ( options.repo ) {
			opts.repo = options.repo;
		}
		if ( options.email ) {
			opts.email = options.email;
		}
		if ( options.keywords && options.keywords.length ) {
			opts.keywords = options.keywords;
		}
		log( 'Creating a `package.json` file...' );
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
				log( 'Encountered an error when creating a `package.json` file: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created a `package.json` file.' );
			clbk();
		}
	}; // end FUNCTION create()
} // end FUNCTION packagejson()


// EXPORTS //

module.exports = packagejson;
