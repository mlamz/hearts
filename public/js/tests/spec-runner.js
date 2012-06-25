define([
	'spec/models/card-properties-spec'
,	'spec/models/card-spec'
,	'spec/collections/hand-spec'
,	'spec/collections/deck-spec'
,	'spec/game-spec'
,	'spec/player-spec'
,	'spec/views/gameview-spec'
	], 
	function(	cardPropertiesSpec
		, 		cardSpec
		, 		handSpec
		,		deckSpec
		,		gameSpec
		,		playerSpec
		,		gameviewSpec
		) {
		return {
			initialize: function(){
				jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
  				jasmine.getEnv().execute();
			}
		}
	}
)