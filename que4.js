// Write a regex function to distinguish and pick the values of email address, phone number from the below paragraph

// Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit,
// sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat.
// Nunc aliquet bibendum enim facilisis gravida.
// mytraining@deqode.com Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
// Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat
// blandit aliquam etiam erat velit scelerisque in. Egestas egestas
// fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210
// Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl
// suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in.
// Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla.
// Pharetra vel turpis nunc eget lorem dolor.
// Tristique senectus et netus et malesuada.

let regex1 = /^(\(\+91\))?(\+91)?-[0-9]{5}-[0-9]{5}/;
let regex2 = /[0-9]{10}/;
let regex3 = /^([a-zA-Z0-9\+\_\.\-]+)@([a-zA-Z0-9\.\-]+)\.([a-zA-Z]){1,7}$/;
let regexarr = [regex1, regex2, regex3];

let str =
  'Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. mytraining@deqode.com Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.';

let paragraph = str.split(' ');
let output = [];
for (let word of paragraph) {
  for (let regex of regexarr) {
    if (regex.test(word)) {
      output.push(word);
    }
  }
}
console.log(output);
