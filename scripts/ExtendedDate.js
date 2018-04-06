class ExtendedDate extends Date {
	/**
 	 * Get the total number of seconds starting from midnight
	 * @return {number} seconds since midnight
	 */
	getTotalSeconds () {
		var sec = this.getHours() * 60 * 60;
		sec += this.getMinutes() * 60;
		sec += this.getSeconds();
		
		return sec;
	}
	
	/**
	 * Swatch internet time are 1000 beats per day
	 * @return {number} beats since midnight in Zurich
	 */
	getBeats() {
		var fraction = 1000 / 86400;
		return this.getTotalSeconds() * fraction;
	}
	
	/**
	 * Octal time
	 */
}

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