define(['backbone'], 
	function(Backbone) {
    	var Card = Backbone.Model.extend({
    		initialize: function(){
                this.rank = this.get('rank');
                this.suit = this.get('suit');
    		}
    	});
    	Card.prototype.equals = function(otherCard){
    		if (this.suit === otherCard.suit && this.rank === otherCard.rank){
    			return true;
    		};

    		return false;
    	};
    	return Card;
	}
);