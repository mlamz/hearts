define(['views/gameView'],
	function(gameView){
		return {
			initialize: function(){
				console.log("initialising app");
				gameView.initialize();
			}
		}
	}
)