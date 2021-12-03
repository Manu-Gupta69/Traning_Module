// factorial of a number using closure

function calFactorial(number){
let ans ;
function factorial(n){
   if(n <= 1) return 1;
    return n * factorial(n-1);
}
 let ans = factorial(number);
return ans;
}

console.log(calFactorial(4));

