define(['../../../models/card-properties','../../../models/card'], 
  function(CardProperties, Card) {
    describe("Card", function() {

		it("can be initialised with a rank and a suit", function() {
			var card = new Card({ rank: CardProperties.rank.ace, suit: CardProperties.suit.hearts });
			
			expect(card.get('rank')).toEqual(CardProperties.rank.ace);
			expect(card.get('suit')).toEqual(CardProperties.suit.hearts);
		});
      });
  }
)

