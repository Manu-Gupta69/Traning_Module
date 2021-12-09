//Write a regex pattern to match the valid email address
let regex = /^([a-zA-Z0-9\+\_\.\-]+)@([a-zA-Z0-9\.\-]+)\.([a-zA-Z]){1,3}$/;
let str = ',man6198u.gupta@gm.ai.l.com';

console.log(regex.test(str));
