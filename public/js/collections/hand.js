define(['backbone', '../models/card'], 
	function(Backbone, Card) {
    	var Hand = Backbone.Collection.extend({
    		model: Card,
    		initialize: function(){
    			this.populateHand();
    		},
    		populateHand: function(){
    			var i;
    			for (i = 0;i<13;i++){
    				this.add(new Card());
    			}
    		}
    	});
    	return Hand;
    }
);