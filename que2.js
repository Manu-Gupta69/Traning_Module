//Write two functions that use Promises that you can chain! The first function, makeAllCaps(),
//will take in an array of words and capitalize them, and then the second function, sortWords(),
//will sort the words in alphabetical order.
//If the Array contains anything but Strings, it should throw an error.

function makeAllCaps(array) {
  return new Promise((resolve, reject) => {
    let allCapsArray = array.map((item) => {
      if (typeof item !== 'string') reject('Not a string');
      return item.toUpperCase();
    });
    resolve(allCapsArray);
  });
}
function sortWords(array) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) reject('Not an  array');
    resolve(array.sort());
  });
}

let arr = ['a', 'B'];
makeAllCaps(arr)
  .then((allcaps) => {
    console.log(allcaps);
    return sortWords(allcaps);
  })
  .then((sortword) => {
    console.log(sortword);
  })
  .catch((err) => {
    console.log(err);
  });
