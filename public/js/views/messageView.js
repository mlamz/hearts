define(['jquery', 'underscore', 'backbone'], 
	function($, _, Backbone) {
		
		var MessageView = Backbone.View.extend({
			el:$('#messages'),
			initialize: function(){
				this.el.append("Swap phase. Please choose three cards to swap to the left.");
			}
		});

		return MessageView;
	}
)
