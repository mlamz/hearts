define(['backbone', '../models/card-properties', '../models/card'], 
	function(Backbone, CardProperties, Card) {
    	var Deck = Backbone.Collection.extend({
    		model: Card,
    		initialize: function(){
    			this.populateDeck();
    		},
    		populateDeck: function(){
    			var cards = []
                ,   i;
		    	for(var suit in CardProperties.suit){
		    		for(var rank in CardProperties.rank){
		    			this.add(new Card({suit:CardProperties.suit[suit],rank:CardProperties.rank[rank]}));
		    		}
		    	}
    		}
    	});
    	return Deck;
    }
);