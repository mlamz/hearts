define([
	'underscore'
,	'deck'
,	'player'
,	'hand'
,	'gameError'
,	'cardProperties'
	], function( 
		_
,		Deck
,		Player
,		Hand
,		GameError
,		CardProperties
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

		Game.prototype.processPlayersGo = function(player, card){
			var isTwoOfClubs = card.get('suit') === CardProperties.suit.clubs && card.get('rank') === CardProperties.rank.two;

			if (!isTwoOfClubs){
				throw new GameError("first card played must be two of clubs");
			}
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