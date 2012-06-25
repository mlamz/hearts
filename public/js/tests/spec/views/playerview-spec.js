define(['playerView'], 
  function(PlayerView) {
    describe("PlayerView", function() {
    	it("should be able to initialize a playerView", function(){
    		var playerView = new PlayerView();

    		expect(playerView).toBeDefined();
    	});
    })
})