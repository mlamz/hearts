define([	
	'underscore'
, 'cardProperties'
,	'../../models/card'
,	'../../collections/hand'
,	'../../collections/deck'
,	'../../game'
, 'gameError'
], 
  function(_, CardProperties, Card, Hand, Deck, Game, GameError) {
  	describe("Game", function(){
  		it("should be initialised with a deck", function(){
  			var game = new Game();
  			expect(game.deck).toBeDefined();
  		});

  		it("should know what turn of the game it is", function(){
  			var game = new Game();
        _.each(game.players, function(player){ player.swapPhaseCompleted = true; });
  			expect(game.turn).toEqual(0);
  			
  			game.playNextTurn();
  			expect(game.turn).toEqual(1);

  			game.playNextTurn();
  			expect(game.turn).toEqual(2);
  		});

  		it("should be initialised with 4 players", function(){
  			var game = new Game();

  			expect(game.players.length).toEqual(4);
  			expect(game.players[0].name).toEqual("Player 1");
  			expect(game.players[1].name).toEqual("Computer 1");
  			expect(game.players[2].name).toEqual("Computer 2");
  			expect(game.players[3].name).toEqual("Computer 3");
  		});

  		it("should assign a hand to each player from its deck", function(){
  			var game = new Game();

  			expect(game.players[0].hand).toBeDefined();
  			expect(game.players[0].hand.models.length).toEqual(13);

  		});

      it("should throw an exception if we try and advance to turn 1 before each player has performed their swap phase", function(){
        var game = new Game(),
            expectedException = new GameError("all players must complete their swap phase");

        expect(function() { game.playNextTurn(); }).toThrow(expectedException);
        _.each(game.players, function(player){ player.swapPhaseCompleted = true; });

        game.playNextTurn();
        expect(game.turn).toEqual(1);
      });

      it("should accept the two of clubs as the first card played in turn 1", function(){
        var game = new Game()
        ,   twoOfClubs;

        _.each(game.players, function(player){ player.swapPhaseCompleted = true; });
        game.turn = 1;

        twoOfClubs = new Card({suit: CardProperties.suit.clubs, rank: CardProperties.rank.two });
        game.processPlayersGo(game.players[0], twoOfClubs);
      });

      it("should throw an exception if any other card apart from the two of clubs is the first card played", function(){
        var game = new Game(),
        deck = new Deck(),
        otherCards,
        expectedException = new GameError("first card played must be two of clubs");

        _.each(game.players, function(player){ player.swapPhaseCompleted = true; });
        game.turn = 1;

        otherCards = _.filter(deck.models, 
          function(card){ 
            return !(card.get('suit') === CardProperties.suit.clubs && card.get('rank') === CardProperties.rank.two)
          });

        expect(otherCards.length).toEqual(51);

        _.each(otherCards, function(card){
          expect(function() { game.processPlayersGo(game.players[0], card); }).toThrow(expectedException);
        });

      });

      it("should record the turn, player and card for every go", function(){
        var game = new Game()
        ,   twoOfClubs
        ,   kingOfClubs
        ,   queenOfClubs
        ,   aceOfClubs;

        _.each(game.players, function(player){ player.swapPhaseCompleted = true; });
        game.turn = 1;

        twoOfClubs = new Card({suit: CardProperties.suit.clubs, rank: CardProperties.rank.two });
        kingOfClubs = new Card({suit: CardProperties.suit.clubs, rank: CardProperties.rank.king });
        queenOfClubs = new Card({suit: CardProperties.suit.clubs, rank: CardProperties.rank.queen });
        aceOfClubs = new Card({suit: CardProperties.suit.clubs, rank: CardProperties.rank.ace });

        game.processPlayersGo(game.players[0], twoOfClubs);
       // game.processPlayersGo(game.players[1], kingOfClubs);
      //  game.processPlayersGo(game.players[2], queenOfClubs);
        //game.processPlayersGo(game.players[3], aceOfClubs);

        expect(game.record).toEqual([[1, game.players[0], twoOfClubs]]);
      });
  	})
  }
)

