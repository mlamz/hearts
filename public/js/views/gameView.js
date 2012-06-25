define(['jquery', 'underscore', 'backbone','game', 'playerView'], 
	function($, _, Backbone, Game, PlayerView) {
		return {
			initialize: function(){
				var GameView = Backbone.View.extend({
					el: $("#game"),
					initialize: function(){
						var game
						,	player1View
						,	player2View
						,	player3View
						,	player4View
						;

						game = new Game();

						console.dir(game);

						player1View = new PlayerView(game.players[0]);
						player2View = new PlayerView(game.players[1]);
						player3View = new PlayerView(game.players[2]);
						player4View = new PlayerView(game.players[3]);
					},
					render: function(){

					}
				});

				var gameView = new GameView();
			}
		}
	}
)
