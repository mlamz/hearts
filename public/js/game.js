define([
	'underscore'
,	'deck'
,	'player'
,	'hand'
	], function( 
		_
,		Deck
,		Player
,		Hand
		) {

		var Game = function(){
			this.deck = new Deck();
			this.turn = 0;
			this.players = getPlayers(this.deck);
		};

		Game.prototype.playNextTurn = function(){
			this.turn += 1;
		}

		function getPlayers(deck){
			var players = [
				new Player("Player 1")
			, 	new Player("Computer 1")
			, 	new Player("Computer 2")
			, 	new Player("Computer 3")
			];

			_.each(players, function(player){ 
				player.hand = new Hand(deck);
			});

			return players;
		}
		return Game;
});