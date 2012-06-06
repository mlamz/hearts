define([
//	'collections/hand'
	'deck'
	], function(
		//Hand, 
		Deck
		) {
		var Game = function(){
			this.deck = new Deck();
		};

		return Game;
});