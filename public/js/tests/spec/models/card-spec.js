define(['underscore','cardProperties','card','deck'], 
  function(_, CardProperties, Card, Deck) {
    describe("Card", function() {

		it("can be initialised with a rank and a suit", function() {
			var card = new Card({ rank: CardProperties.rank.ace, suit: CardProperties.suit.hearts });
			
			expect(card.get('rank')).toEqual(CardProperties.rank.ace);
			expect(card.get('suit')).toEqual(CardProperties.suit.hearts);
		});

		it("two cards with the same rank and suit should be equal", function(){
			var card = new Card({ rank: CardProperties.rank.ace, suit: CardProperties.suit.hearts });
			var card2 = new Card({ rank: CardProperties.rank.ace, suit: CardProperties.suit.hearts });

			expect(card.equals(card2)).toEqual(true);
			expect(card2.equals(card)).toEqual(true);
		});

		it("non-identical cards should not be equal", function(){
			var card = new Card({ rank: CardProperties.rank.queen, suit: CardProperties.suit.hearts });
			var card2 = new Card({ rank: CardProperties.rank.ace, suit: CardProperties.suit.hearts });

			var card3 = new Card({ rank: CardProperties.rank.ace, suit: CardProperties.suit.clubs });
			var card4 = new Card({ rank: CardProperties.rank.ace, suit: CardProperties.suit.diamonds });

			expect(card.equals(card2)).toEqual(false);
			expect(card3.equals(card4)).toEqual(false);
		});

		it("the queen of spades should be 13 points", function(){
			var card = new Card({ rank: CardProperties.rank.queen, suit: CardProperties.suit.spades });

			expect(card.points).toEqual(13);
		});

		it("all hearts should be 1 point", function(){
			var deck = new Deck();

			hearts = _.filter(deck.models, function(card){ return card.suit === CardProperties.suit.hearts});

			_.each(hearts, function(card){
				expect(card.points).toEqual(1);
			});
			
		});

		it("all other cards should be 0 points", function(){
			var deck = new Deck()
			, 	queenOfSpades
			,	zeroPointCards;
			
			queenOfSpades = new Card({ rank: CardProperties.rank.queen, suit: CardProperties.suit.spades });

			zeroPointCards = _.filter(deck.models, function(card){ return !card.equals(queenOfSpades) && card.suit !== CardProperties.suit.hearts});
			
			_.each(zeroPointCards, function(card){ 
				expect(card.points).toEqual(0);
			})
		});
      });
  }
)

