define(['jquery', 'underscore', 'backbone','game', 'playerView', 'messageView'], 
	function($, _, Backbone, Game, PlayerView, MessageView) {
		return {
			initialize: function(){
				var GameView = Backbone.View.extend({
					el: $("#game"),
					chosenCardsToSwap: 0,
					initialize: function(){
						var game
						,	player1View
						,	player2View
						,	player3View
						,	player4View
						;

						this.game = new Game();

						console.dir(this.game);

						player1View = new PlayerView(this.game.players[0]);
						player2View = new PlayerView(this.game.players[1]);
						player3View = new PlayerView(this.game.players[2]);
						player4View = new PlayerView(this.game.players[3]);

						this.messages = new MessageView();
					},
					render: function(){
					},
					events: {
						"click .card": "processGo",
						"click #swap": "swap"
					},
					processGo: function(e){
						var card 	= 	$(e.currentTarget)
						,	offset 	=  	card.offset()
						;

						if (this.game.turn === 0){
							if (card.attr('data-chosen') != 'true'){
								this.chosenCardsToSwap++;
								card.attr('data-chosen', 'true');
								card.offset({top: offset.top - 10, left: offset.left});
							} else {
								this.chosenCardsToSwap--;
								card.attr('data-chosen', 'false');
								card.offset({top: offset.top + 10, left: offset.left});
							}

							console.log('suit: ' + card.data('suit'));
							console.log('rank: ' + card.data('rank'));
							console.log('playerNumber: ' + card.data('playernumber'));

							console.log('turn number', this.game.turn);
							var offset =  card.offset();
							console.log("offset", offset);
							
						}
					},
					swap: function(){
						var cardsToSwap;

						cardsToSwap = $('.card[data-chosen="true"]');

						if (cardsToSwap.length !== 3){
							this.messages.write("Please make sure that the number of cards to swap is 3");
							return;
						}
						console.log("swapping the following cards", cardsToSwap);


					}
				});

				var gameView = new GameView();
			}
		}
	}
)
