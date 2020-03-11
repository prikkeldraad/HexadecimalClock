const ExtendedDate = require("./../scripts/ExtendedDate.js");

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "getTotalSeconds", function( assert ) {
	let ed = new ExtendedDate();
	seconds = ed.getTotalSeconds();
	
	let d = new Date();
	total = d.getHours() * 60 * 60 + d.getMinutes() * 60 + d.getSeconds();
	
	assert.equal(seconds, total, "Extended seconds equals expectation");
});
/*
QUnit.test( "getTotalSecondsAtNoon", function( assert ) {
	// total seconds at noon should be 43200
	let ed = new ExtendedDate(2000, 1, 1, 12);
	assert.equal(ed.getTotalSeconds(), 43200, "Noon should result in 42300 seconds");
});

QUnit.test( "getBeats", function ( assert) {
	// midnight utc+1 should give 0000
	var now = new ExtendedDate(2000, 1, 1);
	beats = now.getBeats();
	assert.equal(beats, 0, "Beats at midnight should be 0");
	
	// noon should be 500
	var now = new ExtendedDate(2000, 1, 1, 12);
	beats = now.getBeats();
	assert.equal(beats, 500, "Beats at noon should be 500");
});

QUnit.test( "hex2dec", function (assert) {
	var hex = new HexadecimalTime();
	assert.equal(hex.hex2dec('BB'), 187, "BB in hex equals 187 in dec");
	assert.equal(hex.dec2hex('255'), 'FF', "255 in dec equals FF in hex");
});

QUnit.test("hextime", function (assert) {
	var hex = new HexadecimalTime(2000, 1, 1);
	assert.equal(hex.getHexTime(), ".0000", "Hextime is .0000 at midnight");
	
	var hex = new HexadecimalTime(2000, 1, 1, 12);
	assert.equal(hex.getHexTime(), ".8000", "Hextime should be .8000 at noon");
});

QUnit.test("getIntuitorHexTime", function (assert) {
	var hex = new HexadecimalTime(2000, 1, 1);
	assert.equal(hex.getIntuitorHexTime(), "0_00_0", "IntuitorHexTime is 0_00_0 at midnight");
	
	var hex = new HexadecimalTime(2000, 1, 1, 12);
	assert.equal(hex.getIntuitorHexTime(), "8_00_0", "IntuitorHexTime should be 8_00_0 at noon");

	var hex = new HexadecimalTime(2000, 1, 1, 23, 15);
	assert.equal(hex.getIntuitorHexTime(), "F_80_0", "IntuitorHexTime should be F_80_0 at 23:15");

});
*/

