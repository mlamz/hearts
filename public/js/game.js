define([
	'deck'
,	'player'
	], function( 
		Deck
,		Player
		) {
		var Game = function(){
			this.deck = new Deck();
			this.turn = 0;
			this.players = getPlayers();
		};

		Game.prototype.playNextTurn = function(){
			this.turn += 1;
		}

		function getPlayers(){
			var players = [
				new Player("Player 1")
			, 	new Player("Computer 1")
			, 	new Player("Computer 2")
			, 	new Player("Computer 3")
			];

			return players;
		}
		return Game;
});