define(['jquery', 'underscore', 'backbone','game', 'playerView', 'messageView'], 
	function($, _, Backbone, Game, PlayerView, MessageView) {
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

						new MessageView();
					},
					render: function(){
					},
					events: {
						"click .card": "processGo"
					},
					processGo: function(e){
						console.log('suit: ' + $(e.currentTarget).data('suit'));
						console.log('rank: ' + $(e.currentTarget).data('rank'));
						console.log('playerNumber: ' + $(e.currentTarget).data('playernumber'));
					}
				});

				var gameView = new GameView();
			}
		}
	}
)
