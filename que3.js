// Create a constructor function Calculator that creates objects with 3 methods:
// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator() {
  this.val1 = null;
  this.val2 = null;
  this.read = function () {
    let values = window.prompt('Enter two values');
    let valueArgs = values.split(' ');
    this.val1 = parseInt(valueArgs[0]);
    this.val2 = parseInt(valueArgs[1]);
  };
  this.sum = function () {
    return this.val1 + this.val2;
  };
  this.mul = function () {
    return this.val1 * this.val2;
  };
}

let cal1 = new Calculator();
cal1.read();
console.log(cal1.sum());
console.log(cal1.mul());
