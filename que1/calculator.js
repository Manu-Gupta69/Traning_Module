// eslint-disable-next-line linebreak-style
const readline = require('readline');
const Calculator = require('./calculatormodel');

let map = {
  '+': 'addition',
  '-': 'substraction',
  '/': 'division',
  '*': 'multiplication',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const enterVal1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter value 1 ', (val1) => {
      resolve(val1);
    });
  });
};

const enterVal2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter value 2 ', (val2) => {
      resolve(val2);
    });
  });
};
const enterOperation = () =>
  new Promise((resolve, reject) =>
    rl.question('Enter operation (+,-,/,*) ', (op) => resolve(op))
  );

exports.main = async () => {
  let val1 = await enterVal1();
  let val2 = await enterVal2();
  let op = await enterOperation();
  let cal = new Calculator();
  let perform = map[op];
  cal[perform](parseInt(val1), parseInt(val2));
  rl.close();
};
