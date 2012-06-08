define([
	'underscore'
,	'deck'
,	'player'
,	'hand'
,	'gameError'
,	'cardProperties'
,	'card'
	], function( 
		_
,		Deck
,		Player
,		Hand
,		GameError
,		CardProperties
,		Card
		) {

		var Game = function(){
			this.deck = new Deck();
			this.turn = 0;
			this.players = getPlayers(this.deck);
			this.record = [];
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
			var twoOfClubs = new Card({suit: CardProperties.suit.clubs, rank: CardProperties.rank.two});

			if (!card.equals(twoOfClubs) && this.record.length === 0){
				throw new GameError("first card played must be two of clubs");
			}

			this.record.push([this.turn, player, card]);
			if(this.record.length % 4 === 0 && this.record.length > 0){
				_.each(this.players, function(player) { return player.winnerOfLastRound = false; });
				determineWinnerOfTurn(this.record);
			}
		}

		function determineWinnerOfTurn(record){
			var cardsPlayedInTurn, winningPlayerGo;
			cardsPlayedInTurn = record.slice(record.length - 4);
			cardsPlayedInTurn = _.sortBy(cardsPlayedInTurn, function(playerGo){ return playerGo[2].rank; });
			winningPlayerGo = _.last(cardsPlayedInTurn);
			winningPlayerGo[1].winnerOfLastRound = true;
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