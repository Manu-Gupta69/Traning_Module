//Write a JavaScript program to test if the first character of a string is uppercase or not,
//if not then set the first character to uppercase

let testStr = "";

function makeUppercase(str) {
  let finalRes = str.split("");
  console.log(finalRes);
  for (let [index, char] of finalRes.entries()) {
      if(char >= 'A' && char <= 'Z'){
          break;
      }
    else if (char >= "a" && char <= "z") {
      finalRes[index] = char.toUpperCase();
      break;
    }
  }
  return finalRes.join("");
}

console.log(makeUppercase(testStr));
