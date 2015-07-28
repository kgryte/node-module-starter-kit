'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isString = require( 'validate.io-string-primitive' ),
	isStringArray = require( 'validate.io-string-array' ),
	isValidEmail = require( 'validate.io-email-address' );


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
* @returns {Null|Error} null or an error
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'cp()::invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'name' ) ) {
		opts.name = options.name;
		if ( !isString( opts.name ) ) {
			return new TypeError( 'cp()::invalid option. Module name option must be a string primitive. Option: `' + opts.name + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'desc' ) ) {
		opts.desc = options.desc;
		if ( !isString( opts.desc ) ) {
			return new TypeError( 'cp()::invalid option. Description must be a string primitive. Option: `' + opts.desc + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'author' ) ) {
		opts.author = options.author;
		if ( !isString( opts.author ) ) {
			return new TypeError( 'cp()::invalid option. Module author option must be a string primitive. Option: `' + opts.author + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'email' ) ) {
		opts.email = options.email;
		if ( !isString( opts.email ) ) {
			return new TypeError( 'cp()::invalid option. Module author email must be a string primitive. Option: `' + opts.email + '`.' );
		}
		if ( !isValidEmail( opts.email ) ) {
			return new Error( 'cp()::invalid option. Invalid email address. Option: `' + opts.email + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'keywords' ) ) {
		opts.keywords = options.keywords;
		if ( !isStringArray( opts.keywords ) ) {
			return new TypeError( 'cp()::invalid option. Module keywords option must be a string array. Option: `' + opts.keywords + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'cmd' ) ) {
		opts.cmd = options.cmd;
		if ( !isString( opts.cmd ) ) {
			return new TypeError( 'cp()::invalid option. Module command option must be a string primitive. Option: `' + opts.cmd + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'repo' ) ) {
		opts.repo = options.repo;
		if ( !isString( opts.repo ) ) {
			return new TypeError( 'cp()::invalid option. Repository option must be a string primitive. Option: `' + opts.repo + '`.' );
		}
		if ( opts.repo.split( '/' ).length !== 2 ) {
			return new Error( 'cp()::invalid option. Repository option must consist of two parts: an owner/organization and a repository name. Option: `' + opts.repo + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'license' ) ) {
		opts.license = options.license;
		if ( !isString( opts.license ) ) {
			return new TypeError( 'cp()::invalid option. License option must be a string primitive. Option: `' + opts.license + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'holder' ) ) {
		opts.holder = options.holder;
		if ( !isString( opts.holder ) ) {
			return new TypeError( 'cp()::invalid option. Copyright holder option must be a string primitive. Option: `' + opts.holder + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
