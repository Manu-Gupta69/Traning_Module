/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
class Calculator {
  addition = (val1, val2) => {
    console.log(val1 + val2);
  };

  substraction = (val1, val2) => {
    console.log(val1 - val2);
  };

  multiplication = (val1, val2) => {
    console.log(val1 * val2);
  };

  division = (val1, val2) => {
    console.log(val1 / val2);
  };
}
module.exports = Calculator;
