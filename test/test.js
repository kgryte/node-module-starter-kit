'use strict';

// MODULES //

var test = require( 'tape' );
var starter = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof starter === 'function', 'main export is a function' );
	t.end();
});
