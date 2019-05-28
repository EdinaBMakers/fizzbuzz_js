function FizzBuzz() {
};

FizzBuzz.prototype.play = function(number) {
  var result = "";

  if (this._isDivisibleBy(3, number)) {
    result += "fizz";
  }
  if (this._isDivisibleBy(5, number)) {
    result += "buzz";
  }

  return result != "" ? result : number;
};

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}
