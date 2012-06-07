define([
	'underscore'
,	'deck'
,	'player'
,	'hand'
,	'gameError'
	], function( 
		_
,		Deck
,		Player
,		Hand
,		GameError
		) {

		var Game = function(){
			this.deck = new Deck();
			this.turn = 0;
			this.players = getPlayers(this.deck);
		};

		Game.prototype.playNextTurn = function(){
			var swapPhaseCompleted, that = this;
			
			swapPhaseCompleted = _.all(that.players, function(player){ return player.swapPhaseCompleted },that);

			if(!swapPhaseCompleted){
				throw new GameError("all players must complete their swap phase");
			}
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