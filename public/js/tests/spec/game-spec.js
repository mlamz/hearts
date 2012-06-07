define([	
	'underscore'
,	'../../models/card'
,	'../../collections/hand'
,	'../../collections/deck'
,	'../../game'
, 'gameError'
], 
  function(_, Card, Hand, Deck, Game, GameError) {
  	describe("Game", function(){
  		it("should be initialised with a deck", function(){
  			var game = new Game();
  			expect(game.deck).toBeDefined();
  		});

  		it("should know what turn of the game it is", function(){
  			var game = new Game();
        _.each(game.players, function(player){ player.swapPhaseCompleted = true; });
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

  		it("should assign a hand to each player from its deck", function(){
  			var game = new Game();

  			expect(game.players[0].hand).toBeDefined();
  			expect(game.players[0].hand.models.length).toEqual(13);

  		});

      it("should throw an exception if we try and advance to turn 1 before each player has performed their swap phase", function(){
        var game = new Game();

        expect(function() { game.playNextTurn(); }).toThrow("all players must complete their swap phase");
        _.each(game.players, function(player){ player.swapPhaseCompleted = true; });

        game.playNextTurn();
        expect(game.turn).toEqual(1);
      });


  	})
  }
)

