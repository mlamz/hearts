define(['backbone','cardProperties'], 
	function(Backbone, CardProperties) {
    	var Card = Backbone.Model.extend({
    		initialize: function(){
                this.rank = this.get('rank');
                this.suit = this.get('suit');
                this.points = getPoints(this);
    		}
    	});
    	Card.prototype.equals = function(otherCard){
    		if (this.suit === otherCard.suit && this.rank === otherCard.rank){
    			return true;
    		};

    		return false;
    	};

        function getPoints(card){
            if (card.suit === CardProperties.suit.spades && card.rank === CardProperties.rank.queen){
                return 13;
            }

            if(card.suit === CardProperties.suit.hearts){
                return 1;
            }

            return 0;
        }

    	return Card;
	}
);