'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );
var isString = require( 'validate.io-string-primitive' );
var isBoolean = require( 'validate.io-boolean-primitive' );
var isStringArray = require( 'validate.io-string-array' );
var isValidEmail = require( 'validate.io-email-address' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination object
* @param {Object} options - function options
* @param {String} [options.name] - module name
* @param {String} [options.author] - module author
* @param {String} [options.email] - author email
* @param {String} [options.desc] - module description
* @param {String[]} [options.keywords] - module keywords
* @param {String} [options.cmd] - command
* @param {String} [options.repo] - module Github repository
* @param {String} [options.license] - license
* @param {String} [options.holder] - copyright holder
* @param {Boolean} [opts.browser] - boolean indicating whether the module is browser compatible
* @param {Boolean} [opts.git] - boolean indicating whether to initialize a local git repository
* @param {Boolean} [opts.remote] - boolean indicating whether to initialize a remote git repository
* @param {Boolean} [opts.star] - boolean indicating whether to star a remote git repository
* @param {Boolean} [opts.ci] - boolean indicating whether to initialize continuous integration
* @param {Boolean} [opts.install] - boolean indicating whether to run installation tasks
* @param {Boolean} [opts.open] - boolean indicating whether to open the module directory in a text editor
* @param {Boolean} [opts.silent] - boolean indicating whether to turn off verbose logging
* @returns {Null|Error} null or an error
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'name' ) ) {
		opts.name = options.name;
		if ( !isString( opts.name ) ) {
			return new TypeError( 'invalid option. Module name option must be a string primitive. Option: `' + opts.name + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'desc' ) ) {
		opts.desc = options.desc;
		if ( !isString( opts.desc ) ) {
			return new TypeError( 'invalid option. Description must be a string primitive. Option: `' + opts.desc + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'author' ) ) {
		opts.author = options.author;
		if ( !isString( opts.author ) ) {
			return new TypeError( 'invalid option. Module author option must be a string primitive. Option: `' + opts.author + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'email' ) ) {
		opts.email = options.email;
		if ( !isString( opts.email ) ) {
			return new TypeError( 'invalid option. Module author email must be a string primitive. Option: `' + opts.email + '`.' );
		}
		if ( !isValidEmail( opts.email ) ) {
			return new Error( 'invalid option. Invalid email address. Option: `' + opts.email + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'keywords' ) ) {
		opts.keywords = options.keywords;
		if ( !isStringArray( opts.keywords ) ) {
			return new TypeError( 'invalid option. Module keywords option must be a string array. Option: `' + opts.keywords + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'cmd' ) ) {
		opts.cmd = options.cmd;
		if ( !isString( opts.cmd ) ) {
			return new TypeError( 'invalid option. Module command option must be a string primitive. Option: `' + opts.cmd + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'repo' ) ) {
		opts.repo = options.repo;
		if ( !isString( opts.repo ) ) {
			return new TypeError( 'invalid option. Repository option must be a string primitive. Option: `' + opts.repo + '`.' );
		}
		if ( opts.repo.split( '/' ).length !== 2 ) {
			return new Error( 'invalid option. Repository option must consist of two parts: an owner/organization and a repository name. Option: `' + opts.repo + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'license' ) ) {
		opts.license = options.license;
		if ( !isString( opts.license ) ) {
			return new TypeError( 'invalid option. License option must be a string primitive. Option: `' + opts.license + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'holder' ) ) {
		opts.holder = options.holder;
		if ( !isString( opts.holder ) ) {
			return new TypeError( 'invalid option. Copyright holder option must be a string primitive. Option: `' + opts.holder + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'browser' ) ) {
		opts.browser = options.browser;
		if ( !isBoolean( opts.browser ) ) {
			return new TypeError( 'invalid option. Browser option must be a boolean primitive. Option: `' + opts.browser + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'git' ) ) {
		opts.git = options.git;
		if ( !isBoolean( opts.git ) ) {
			return new TypeError( 'invalid option. Git option must be a boolean primitive. Option: `' + opts.git + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'remote' ) ) {
		opts.remote = options.remote;
		if ( !isBoolean( opts.remote ) ) {
			return new TypeError( 'invalid option. Remote option must be a boolean primitive. Option: `' + opts.remote + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'star' ) ) {
		opts.star = options.star;
		if ( !isBoolean( opts.star ) ) {
			return new TypeError( 'invalid option. Star option must be a boolean primitive. Option: `' + opts.star + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'ci' ) ) {
		opts.ci = options.ci;
		if ( !isBoolean( opts.ci ) ) {
			return new TypeError( 'invalid option. CI option must be a boolean primitive. Option: `' + opts.ci + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'install' ) ) {
		opts.install = options.install;
		if ( !isBoolean( opts.install ) ) {
			return new TypeError( 'invalid option. Install option must be a boolean primitive. Option: `' + opts.install + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'open' ) ) {
		opts.open = options.open;
		if ( !isBoolean( opts.open ) ) {
			return new TypeError( 'invalid option. Open option must be a boolean primitive. Option: `' + opts.open + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'silent' ) ) {
		opts.silent = options.silent;
		if ( !isBoolean( opts.silent ) ) {
			return new TypeError( 'invalid option. Silent option must be a boolean primitive. Option: `' + opts.silent + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
