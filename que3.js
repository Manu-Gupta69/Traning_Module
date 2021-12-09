//Write a regex pattern that verifies credit card pattern

let regexp = /^4[0-9]{12}([0-9]{3})?$/;
let str = '415527986045799';

console.log(regexp.test(str));
