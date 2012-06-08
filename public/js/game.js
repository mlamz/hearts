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
			var twoOfClubs
			, 	cardsPlayedInTurn
			,	winningPlayer;

			twoOfClubs = new Card({suit: CardProperties.suit.clubs, rank: CardProperties.rank.two});

			if (!card.equals(twoOfClubs) && this.record.length === 0 && this.turn === 1){
				throw new GameError("first card played must be two of clubs");
			}

			this.record.push([this.turn, player, card]);
			if(this.record.length % 4 === 0 && this.record.length > 0){
				cardsPlayedInTurn = this.record.slice(this.record.length - 4);

				_.each(this.players, function(player) { return player.winnerOfLastRound = false; });
				winningPlayer = determineWinnerOfTurn(cardsPlayedInTurn);
				winningPlayer.score += determineScoreOfTurn(cardsPlayedInTurn);
			}
		}

		function determineWinnerOfTurn(cardsPlayedInTurn){
			var startCardSuit
			, 	cardsPlayedOfTheSameSuit
			,	sortedCards
			,	winningCardPlayedInTurn
			,	winningPlayer;
			
			startCardSuit = cardsPlayedInTurn[0][2].suit;
			cardsPlayedOfTheSameSuit = _.filter(cardsPlayedInTurn, function(card){ return card[2].suit == startCardSuit; });

			sortedCards = _.sortBy(cardsPlayedOfTheSameSuit, function(card){ return card[2].rank; });

			winningCardPlayedInTurn = sortedCards[cardsPlayedOfTheSameSuit.length - 1];
			
			winningPlayer = winningCardPlayedInTurn[1];
			winningPlayer.winnerOfLastRound = true;
			return winningPlayer;
		}

		function determineScoreOfTurn(cardsPlayedInTurn){
			var score = 0;

			_.each(cardsPlayedInTurn, function(cardPlayedInTurn){
				return score += cardPlayedInTurn[2].points;
			});
			return score;
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