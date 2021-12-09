// Deep clone Javascript Object (without using any internal methods of cloning).
// All properties along with functions, prototypes should get cloned to target objects.

let testobj = {
  a: [1, 2, 3],
  b: {
    c: [5, 6],
  },
  d: 'somename',
  e: false,
  f: function test() {
    console.log('idk');
  },
};

function createDeepClone(obj) {
  function deepClone(object) {
    let dummyobj = {};
    for (let key in object) {
      dummyobj[key] = object[key];
      if (Array.isArray(object[key])) {
        dummyobj[key] = [...object[key]];
      } else if (typeof object[key] == 'object') {
        dummyobj[key] = deepClone(object[key]);
      }
    }
    return dummyobj;
  }
  return deepClone(obj);
}
let ans = createDeepClone(testobj);

console.log('ans', ans);
ans.b.c[0] = 10;
console.log('ans', ans);
console.log('testobj', testobj);
ans.f();
