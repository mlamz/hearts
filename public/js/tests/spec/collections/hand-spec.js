define([	
	'underscore'
,	'cardProperties'
,	'../../../models/card'
,	'../../../collections/hand'
,	'../../../collections/deck'
], 
  function(_, CardProperties, Card, Hand, Deck) {


    describe("Hand", function() {
		it("should be initialised with 13 cards", function() {
			var hand = new Hand(new Deck());

			expect(hand.models.length).toEqual(13);

			for(var i = 0;i<13;i++){
				expect(hand.models[i].get('suit')).toBeDefined();
				expect(hand.models[i].get('rank')).toBeDefined();
			}
		});

		it("initialising four hands should randomly assign a pack of cards between the hands", function(){
			var deck = new Deck()
			,	hand1 = new Hand(deck)
			,	hand2 = new Hand(deck)
			,	hand3 = new Hand(deck)
			,	hand4 = new Hand(deck)
			,	myPush = Array.prototype.push;

			var models = [];
			myPush.apply(models, hand1.models);
			myPush.apply(models, hand2.models);
			myPush.apply(models, hand3.models);
			myPush.apply(models, hand4.models);

			var cards = getCardConfigurations();

			for(var i = 0;i<52;i++){
				var model = _.find(models, function(model){ 
					return model.get('suit') == cards[i].get('suit') && model.get('rank') == cards[i].get('rank');
				});
				expect(model).toBeDefined();
			}


		});

		it("should order the cards by suit", function(){
			var hand = new Hand(new Deck())
			,	indexOfFirstClub
			,	indexOfFirstDiamond
			,	indexOfFirstSpade
			,	indexOfFirstHeart
			,	i
			;

			for(i = 0;i<13;i++){
				if(hand.models[i].suit === 0 && !indexOfFirstClub){
					indexOfFirstClub = i;
				}
				else if(hand.models[i].suit === 1 && !indexOfFirstDiamond){
					indexOfFirstDiamond = i;
				}
				else if(hand.models[i].suit === 2 && !indexOfFirstSpade){
					indexOfFirstSpade = i;
				}
				else if(hand.models[i].suit === 3 && !indexOfFirstHeart){
					indexOfFirstHeart = i;
				}
			}
			if (indexOfFirstClub && indexOfFirstDiamond){
				expect(indexOfFirstClub).toBeLessThan(indexOfFirstDiamond);
			}
			if (indexOfFirstDiamond && indexOfFirstSpade){
				expect(indexOfFirstDiamond).toBeLessThan(indexOfFirstSpade);
			}
			if (indexOfFirstSpade && indexOfFirstHeart){
				expect(indexOfFirstSpade).toBeLessThan(indexOfFirstHeart);
			}
		});
    });

    function getCardConfigurations(){
    	var cards = [];
    	for(var suit in CardProperties.suit){
    		for(var rank in CardProperties.rank){
    			cards.push(new Card({suit:CardProperties.suit[suit],rank:CardProperties.rank[rank]}));
    		}
		}

    	return cards;
    }
  }
)

