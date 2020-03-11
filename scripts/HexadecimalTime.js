/**
 * Hexadecimal time
 * 
 * A day is 1 unit. The day begins at midnight at .0000. Each increment is
 * a second. So .8000 is noon and midnight is .FFFF
 */
class HexadecimalTime extends ExtendedDate {
	//constructor(year=null, month=null, day=null, hour=null, minutes=null, seconds=null, milliseconds=null) {
		//if (day != null) {
			//super(year, month, day, hour, minutes, seconds, milliseconds);
		//}
		//this.fraction = 65536 / 86400;*/
	//}
	
	/**
	 * Hexclock runs at hexseconds
	 */
	getTicker() {
		return (84600 / 16 / 256 / 16 * 1000);
	}
	
	getHexTime() {
		var sec = this.getTotalSeconds() * 65536 / 86400;
		return "." + ("0000" + this.dec2hex(sec)).slice(-4);
	}
	
	getIntuitorHexTime() {
		var time = this.getHexTime();
		return time.substr(1, 1) + "_" + time.substr(2,2) + "_" + time.substr(4,1);
	}
	
	hex2dec(hex) {
		return parseInt(hex, 16);
	}
	
	dec2hex(dec) {
		return Number(dec).toString(16).toUpperCase();
	}
	
}


