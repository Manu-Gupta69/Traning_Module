// Write a regex pattern that matches the password
// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character. ( period, dot or full stop) provided that it is not the first or last character 
// and it will not come one after the other.

 let regex = /^[^\.][a-z A-Z 0-9 \! \# \$ \- \% \& \' \* \+ \/ \= \? \^ \_ \` \{ \| \} \~]+(?!.*?\.\.)[^\.]$/

let str = 'adasdfs..d+*f-sdf'

let ans = regex.exec(str)
console.log(ans);
console.log(regex.test(str))