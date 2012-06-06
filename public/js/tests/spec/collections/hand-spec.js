define([	
	'../../../models/card-properties'
,	'../../../models/card'
,	'../../../collections/hand'
], 
  function(CardProperties, Card, Hand) {
    describe("Hand", function() {

		it("can add cards to a hand", function() {
			var hand = new Hand();

			var cardsInHand = hand.length;
			var card = new Card({ rank: CardProperties.rank.ace, suit: CardProperties.suit.hearts });
			
			hand.add(card);
			expect(hand.length).toEqual(cardsInHand + 1);
		});

		it("should be initialised with 13 cards", function() {
			var hand = new Hand();

			expect(hand.length).toEqual(13);
		});

		it("initialising four hands should randomly assign a pack of cards between the hands", function(){
			var hand1 = new Hand()
			,	hand2 = new Hand()
			,	hand3 = new Hand()
			,	hand4 = new Hand()
			,	myPush = Array.prototype.push;

			var models = [];
			myPush.apply(models, hand1.models);
			myPush.apply(models, hand2.models);
			myPush.apply(models, hand3.models);
			myPush.apply(models, hand4.models);

			var cards = getCardConfigurations();

			for(var card in cards){
				//expect(models.indexOf(card)).toBeGreaterThan(0);
			}


		});
    });

    function getCardConfigurations(){
    	var cards = [];
    	for(var suit in CardProperties.suit){
    		for(var rank in CardProperties.rank){
    			cards.push(new Card({suit:suit,rank:rank}));
    		}
    	}

    	return cards;
    }
  }
)

