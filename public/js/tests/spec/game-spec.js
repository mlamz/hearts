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
  	})
  }
)

