// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 10);
// }

// output - 10 10 10 10 10 10 10 10 10 10
// This is because of closure if function is executed in some other scope it still remember its lexical env so it 
// remembers the reference of i so copy of all the setTimeout function pointing to same reference of i and loop was
//constantly running because it is synchronous when the loops end value of i becomes 10

//solution

for (var i = 0; i < 10; i++) {
    function closure(val){
        setTimeout(function() {
            console.log(val);
          }, 10);
    }
     closure(i);
  }

  // callback of setTimeout forms a closure with closure-function evertytime we call closure-function with i
  //  we create closure with new value of i everytime; 