//Using Promise create a function named 'sleep' that should invoke a callback function after x seconds.
//NOTE: sleep function should not block the call stack.

function sleep(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`running after ${x} millisec`);
    }, x);
  });
}

sleep(3000).then((res) => {
  console.log(res);
});
console.log('running sync');
for (let i = 0; i < 5; i++) {
  console.log(i);
}
