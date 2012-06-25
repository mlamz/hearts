define(['jquery', 'underscore', 'backbone','player'], 
	function($, _, Backbone, Player) {
		
		var PlayerView = Backbone.View.extend({

			initialize: function(player){
				this.player = player;
				console.log(player.name + " initialized");
			}
		});

		return PlayerView;
	}
)
