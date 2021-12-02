//Provided a function that checks the validity of string and returns results via a callback.

// Input: ['first', 'Second', 'thiRd', 4, false, 'true']
// Output: {"4":false,"first":true,"Second":false,"thiRd":false,"false":false,"true":true}

let inputarr = ['first', 'Second', 'thiRd', 4, false, 'true'];
let idx  = 0;
let outputmap = {};

function validateString(input, callback) {
  setTimeout(function () {
    // input is said to be valid if it is a lowercase string
         // console.log(input , idx )
    if (typeof input === "string" && input === input.toLowerCase()) {
      return callback(null, true);
    }
    return callback(new Error("Invalid string"), null);
  }, 500);
}


if(inputarr.length){
     validateString(inputarr[0], callback);
}
function callback(err , res){
            let bool = err ? false : true;
            idx +=1;
            if(idx == inputarr.length) {
                 outputmap[inputarr[idx-1]] = bool;
                console.log(outputmap)
                return
            }
                outputmap[inputarr[idx-1]] = bool;
        return validateString(inputarr[idx] , callback);
}

