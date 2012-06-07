define([], function(){
	function GameError(message) {  
	    this.name = "GameError";  
	    this.message = message || "A game error occured";  
	}
	GameError.prototype = new Error();  
	GameError.prototype.constructor = GameError;

	return GameError;
});