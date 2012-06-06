define([
	'spec/models/card-properties-spec'
,	'spec/models/card-spec'
,	'spec/collections/hand-spec'
,	'spec/collections/deck-spec'
	], 
	function(	cardPropertiesSpec
		, 		cardSpec
		, 		handSpec
		,		deckSpec
		) {
		return {
			initialize: function(){
				jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
  				jasmine.getEnv().execute();
			}
		}
	}
)