'use strict';

// MODULES //

var shell = require( 'shelljs' );


// GIT //

/**
* FUNCTION: git( debug )
*	Returns a function to initialize a local git repository in a specified directory.
*
* @param {Function} debug - debug function
* @returns {Function}
*/
function git( debug ) {
	var log = debug( 'starter-kit:git' );
	/**
	* FUNCTION: init( dest, opts, clbk )
	*	Initializes a local git repository in a specified directory.
	*
	* @param {String} dest - destination directory
	* @param {Object} opts - function options
	* @param {Function} clbk - callback function
	* @returns {Void}
	*/
	return function init( dest, options, clbk ) {
		var dir;
		var out;

		if ( options.git === false ) {
			return clbk();
		}
		dir = process.cwd();

		// Move to destination directory:
		out = shell.cd( dest );

		// Initialize a git repo:
		log( 'Initializing a local git repository...' );
		out = shell.exec( 'git init' );
		if ( out.code !== 0 ) {
			log( 'Error encountered when initializing a local git repository: %s', out.stderr );
			return clbk( new Error( out.stderr ) );
		}
		log( 'Local git repository initialized.' );

		// Add a remote origin:
		if ( options.repo ) {
			log( 'Adding a remote origin...' );
			out = shell.exec( 'git remote add origin https://github.com/' + options.repo + '.git' );
			if ( out.code !== 0 ) {
				log( 'Error encountered when adding a remote origin: %s', out.stderr );
				return clbk( new Error( out.stderr ) );
			}
			log( 'Remote origin added.' );
		}
		// Add local files:
		log( 'Adding local files...' );
		out = shell.exec( 'git add -A' );
		if ( out.code !== 0 ) {
			log( 'Error encountered when adding local files: %s', out.stderr );
			return clbk( new Error( out.stderr ) );
		}
		log( 'Local files added.' );

		// Initial commit:
		log( 'Make initial commit...' );
		out = shell.exec( 'git commit -m "Add files"' );
		if ( out.code !== 0 ) {
			log( 'Error encountering when making initial commit: %s', out.stderr );
			return clbk( new Error( out.stderr ) );
		}
		log( 'Initial commit made.' );

		// Restore current directory:
		shell.cd( dir );

		log( 'Successfully initialized a local git repository.' );
		clbk();
	}; // end FUNCTION init()
} // end FUNCTION git()


// EXPORTS //

module.exports = git;