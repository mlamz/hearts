define(['jquery', 'underscore', 'backbone','player'], 
	function($, _, Backbone, Player) {
		
		var PlayerView = Backbone.View.extend({
			template: _.template($("#template-player").html()),
			initialize: function(player){
				this.player = player;
				console.log(player.name + " initialized");
				console.log(player.hand.models);
				this.el = $('#player-' + this.player.number);
				this.render();
			
			},
			render: function(){
				var html = this.template({ name: this.player.name, hand: this.player.hand.models });
    			$(this.el).append(html);
			}
		});

		return PlayerView;
	}
)
