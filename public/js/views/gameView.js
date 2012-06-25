define(['jquery', 'underscore', 'backbone','game'], 
	function($, _, Backbone, Game) {
		return {
			initialize: function(){
				var GameView = Backbone.View.extend({
					el: $("#game"),
					initialize: function(){
						console.log("initialising game");
						var game = new Game();
						console.dir(game);
					},
					render: function(){

					}
				});

				var gameView = new GameView();
			}
		}
	}
)
