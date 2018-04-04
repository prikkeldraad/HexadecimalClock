QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "getTotalSeconds", function( assert ) {
	var now = new ExtendedDate();
	seconds = now.getTotalSeconds();
	
	var now = new Date();
	total = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
	
	assert.equal(seconds, total, "Extended seconds equals expectation");
	
	// total seconds at noon should be 43200
	var now = new ExtendedDate(2000, 1, 1, 12);
	assert.equal(now.getTotalSeconds(), 43200, "Noon should result in 42300 seconds");
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