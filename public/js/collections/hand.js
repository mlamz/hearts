define(['underscore', 'backbone', 'card'], 
	function(_, Backbone,  Card) {
    	var Hand = Backbone.Collection.extend({
    		model: Card,
    		initialize: function(deck){
                this.models = [];
    			this.populateHand(deck);
    		},
    		populateHand: function(deck){
    			var i;
                for(i = 0; i < 13; i++){
                    var card = takeCardFromDeck(deck);
                    this.add(card);
                }
                this.reOrder();
    		},
            reOrder: function(){
                this.models = _.sortBy(this.models, function(card){
                    return ((20 * (card.suit)) + card.rank);
                });
            }
    	});

        function takeCardFromDeck(deck){
            var randonIndex
            ,   randomCard;

            randomIndex = Math.floor(Math.random() * (deck.length));

            randomCard = deck.models[randomIndex];
            deck.remove(randomCard);
            return randomCard;
        }

    	return Hand;
    }
);