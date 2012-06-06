define([	
	'underscore'
,	'../../models/card'
,	'../../collections/hand'
,	'../../collections/deck'
,	'../../game'
], 
  function(_, Card, Hand, Deck, Game) {
  	describe("Game", function(){
  		it("should be initialised with a deck", function(){
  			var game = new Game();
  			expect(game.deck).toBeDefined();
  			expect(game.deck.models.length).toEqual(52);
  		});

  		it("should know what turn of the game it is", function(){
  			var game = new Game();
  			expect(game.turn).toEqual(0);
  			
  			game.playNextTurn();
  			expect(game.turn).toEqual(1);

  			game.playNextTurn();
  			expect(game.turn).toEqual(2);
  		});

  		it("should be initialised with 4 players", function(){
  			var game = new Game();

  			expect(game.players.length).toEqual(4);
  			expect(game.players[0].name).toEqual("Player 1");
  			expect(game.players[1].name).toEqual("Computer 1");
  			expect(game.players[2].name).toEqual("Computer 2");
  			expect(game.players[3].name).toEqual("Computer 3");
  		});
  	})
  }
)

