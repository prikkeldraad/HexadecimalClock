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
		var fraction = 1000 / 84600;
		alert(fraction);
		return this.getTotalSeconds() * fraction;
	}
}