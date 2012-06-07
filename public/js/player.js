define(['underscore','hand'], function(_, Hand) {
		var Player = function(name){
			this.name = name;
			this.swapPhaseCompleted = false;
		};

		Player.prototype.swap = function(player, itemsToBeSwapped){
			var that = this;
			_.each(itemsToBeSwapped, function(card){
				player.hand.add(card);
				that.hand.remove(card);
				that.swapPhaseCompleted = true;
			});
		};

		return Player;
});