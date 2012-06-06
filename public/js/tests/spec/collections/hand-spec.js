define([	
	'../../../models/card-properties'
,	'../../../models/card'
,	'../../../collections/hand'
], 
  function(CardProperties, Card, Hand) {
    describe("Hand", function() {

		it("can add cards to a hand", function() {
			var hand = new Hand();

			expect(hand.length).toEqual(0);
			var card = new Card({ rank: CardProperties.rank.ace, suit: CardProperties.suit.hearts });
			
			hand.add(card);
			expect(hand.length).toEqual(1);
		});
      });
  }
)

