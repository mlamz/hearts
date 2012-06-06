define([
	'underscore'
,	'../../../models/card-properties'
,	'../../../models/card'
,	'../../../collections/deck'
], 
  function(_, CardProperties, Card, Deck) {
  	
    describe("Deck", function() {
		it("should be initialised with 52 cards, one of each configuration", function() {
			var deck = new Deck()
			,	i;

			expect(deck.length).toEqual(52);
			console.log(deck.models);
			for(i = 0;i<13;i++){
				expect(deck.models[i].get('suit')).toEqual(CardProperties.suit.clubs);
			};

			for(i = 13;i<26;i++){
				expect(deck.models[i].get('suit')).toEqual(CardProperties.suit.diamonds);
			};
			
			for(i = 26;i<39;i++){
				expect(deck.models[i].get('suit')).toEqual(CardProperties.suit.spades);
			};	

			for(i = 39;i<52;i++){
				expect(deck.models[i].get('suit')).toEqual(CardProperties.suit.hearts);
			};	
			
			expect(deck.models[0].get('rank')).toEqual(CardProperties.rank.two);
		});
    });
  }
)

