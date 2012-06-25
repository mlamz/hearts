define(['player', 'playerView'], 
  function(Player, PlayerView) {
    describe("PlayerView", function() {
    	it("should be able to initialize a playerView", function(){
    		var playerView = new PlayerView(new Player('Player 1', 1));

    		expect(playerView).toBeDefined();
    		expect(playerView.player.name).toEqual('Player 1');
    		expect(playerView.player.number).toEqual(1);
    	});
    })
})