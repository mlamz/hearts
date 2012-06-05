define([ 'spec/models/card-properties-spec'], 
	function(cardPropertiesSpec) {
		return {
			initialize: function(){
				jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
  				jasmine.getEnv().execute();
			}
		}
	}
)