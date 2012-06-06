define([
	'spec/models/card-properties-spec'
,	'spec/models/card-spec'
,	'spec/collections/hand-spec'
	], 
	function(	cardPropertiesSpec
		, 		cardSpec
		, 		handSpec
		) {
		return {
			initialize: function(){
				jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
  				jasmine.getEnv().execute();
			}
		}
	}
)