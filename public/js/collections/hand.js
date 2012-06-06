define(['backbone', '../models/card'], 
	function(Backbone, Card) {
    	var Hand = Backbone.Collection.extend({
    		model: Card
    	});
    	return Hand;
    }
);