define([
	'spec/models/card-properties-spec'
,	'spec/models/card-spec'
	], 
	function(	cardPropertiesSpec
		, 		cardSpec
		) {
		return {
			initialize: function(){
				jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
  				jasmine.getEnv().execute();
			}
		}
	}
)