define(['underscore','hand','gameError'], function(_, Hand, GameError) {
		var Player = function(name, number){
			this.name = name;
			this.swapPhaseCompleted = false;
			this.winnerOfLastRound = false;
			this.score = 0;
			this.number = number;
		};

		Player.prototype.swap = function(player, cardsToSwap){
			var that = this;

			if (!(player instanceof Player)){
				throw new TypeError("type exception: check parameter type is player");
			}

			if (cardsToSwap.length != 3){
				throw new RangeError("exactly 3 cards must be specified in a swap");
			}

			if (that.swapPhaseCompleted){
				throw new GameError("a player cannot swap multiple times");
			}

			_.each(cardsToSwap, function(card){
				player.hand.add(card);
				that.hand.remove(card);
				that.swapPhaseCompleted = true;
			});
		};

		return Player;
});