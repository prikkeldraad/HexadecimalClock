/**
* Hexadecimal clock
*
* A day has 10 hexadecimal hours, each hour has 100 minutes en each minute 
* has 10 seconds
*
* base(10)
* 24h, 60m, 60s
*
* base(16)
* 10h, 100m, 10s
*
* hex in base(10)
* 16h, 256m, 16s -> 84600 / 16 / 256 / 16 = 
*/
class HexadecimalClock {
	constructor(id) {
		this.id = id;
		this.element = document.getElementById(id);
		this.hextime = new HexadecimalTime();
	}
	
	update() {
		var now = new HexadecimalTime();
		this.element.innerHTML = now.getHexTime();
	}
	
	// update each 1.247051886792453 base(10) seconds
	show() {
		this.update();
		
		var that = this;
		setTimeout(function() {
			that.show();
		}, that.hextime.getTicker());
	}		
}