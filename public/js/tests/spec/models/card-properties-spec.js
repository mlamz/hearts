define(['../../../models/card-properties'], 
  function(CardProperties) {
    describe("CardProperties", function() {

		it("should have all four suits", function() {
			expect(CardProperties.suit.clubs).toEqual(0);
			expect(CardProperties.suit.diamonds).toEqual(1);
			expect(CardProperties.suit.spades).toEqual(2);
			expect(CardProperties.suit.hearts).toEqual(3);
		});

		it("should have all card ranks", function() {
			expect(CardProperties.rank.two).toEqual(2);
			expect(CardProperties.rank.three).toEqual(3);
			expect(CardProperties.rank.four).toEqual(4);
			expect(CardProperties.rank.five).toEqual(5);
			expect(CardProperties.rank.six).toEqual(6);
			expect(CardProperties.rank.seven).toEqual(7);
			expect(CardProperties.rank.eight).toEqual(8);
			expect(CardProperties.rank.nine).toEqual(9);
			expect(CardProperties.rank.ten).toEqual(10);
			expect(CardProperties.rank.jack).toEqual(11);
			expect(CardProperties.rank.queen).toEqual(12);
			expect(CardProperties.rank.king).toEqual(13);
			expect(CardProperties.rank.ace).toEqual(14);
		})
      });
  }
)

