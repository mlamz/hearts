define(['underscore','hand'], function(_, Hand) {
		var Player = function(name){
			this.name = name;
			this.swapPhaseCompleted = false;
		};

		Player.prototype.swap = function(player, cardsToSwap){
			var that = this;

			if (!(player instanceof Player)){
				throw new TypeError("type exception: check parameter type is player");
			}

			if (cardsToSwap.length != 3){
				throw new RangeError("exactly 3 cards must be specified in a swap");
			}

			_.each(cardsToSwap, function(card){
				player.hand.add(card);
				that.hand.remove(card);
				that.swapPhaseCompleted = true;
			});
		};

		return Player;
});