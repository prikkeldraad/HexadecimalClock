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
	}
	
	get_seconds(now) {
		var sec = now.getHours() * 60 * 60;
		sec += now.getMinutes() * 60;
		sec += now.getSeconds();
		
		return sec;
	}
	
	update() {
		var now = new Date();
		var seconds = this.get_seconds(now);
		
		this.element.innerHTML = seconds;
	}
	
	// update each 1.247051886792453 base(10) seconds
	show() {
		this.update();
		
		var that = this;
		setTimeout(function() {
			that.show();
		}, (84600 / 16 / 256 / 16 * 1000));
	}		
}