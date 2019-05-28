describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("#play", function() {
    it("returns 'fizz' when passed 3", function() {
      expect(fizzBuzz.play(3)).toEqual("fizz");
    });

    it("returns 'fizz' when passed a multiple of 3", function() {
      expect(fizzBuzz.play(6)).toEqual("fizz");
    });

    it("returns 'buzz' when passed 5", function() {
      expect(fizzBuzz.play(5)).toEqual("buzz");
    });

    it("returns 'buzz' when passed a multiple of 5", function() {
      expect(fizzBuzz.play(10)).toEqual("buzz");
    });

    it("returns 'fizzbuzz' when passed a multiple of 3 and 5", function() {
      expect(fizzBuzz.play(15)).toEqual("fizzbuzz");
    });

    it("returns number for a number that is not multiple of 3 or 5", function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
  });
});
