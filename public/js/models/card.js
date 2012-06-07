define(['backbone'], 
	function(Backbone) {
    	var Card = Backbone.Model.extend({
    		initialize: function(){
    		}
    	});
    	Card.prototype.equals = function(otherCard){
    		if (this.get('suit') === otherCard.get('suit') && this.get('rank') === otherCard.get('rank')){
    			return true;
    		};

    		return false;
    	};
    	return Card;
	}
);