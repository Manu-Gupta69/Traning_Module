function Arr() {
  this.map = {};
  this.head = null;
  this.tail = null;
  this.length = 0;
  this.idx = 0;

  this.display = function () {
    let current = this.head;
    let arr = [];
    while (current !== null) {
      arr.push(current.value, '->');
      current = current.next;
    }
    console.log(...arr);
    console.log('len ->', this.length);
    console.log(this.map);
    console.log('idx->', this.idx);
  };
  this.fix = function () {
    this.map = {};
    let tempidx = 0;
    let current = this.head;
    while (current !== null) {
      this.map[tempidx] = current;
      current = current.next;
      tempidx += 1;
    }
    this.length = Object.keys(this.map).length;
    this.idx = this.length;
  };

  this.push = function (val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
      this.map[this.idx] = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.map[this.idx] = newNode;
    }
    this.idx += 1;
    this.length += 1;
  };
  this.pop = function () {
    if (this.length == 1) {
      this.shift();
      return;
    } else {
      let lastsecnode = this.map[this.length - 2];
      lastsecnode.next = lastsecnode.next.next;
    }
    delete this.map[this.length - 1];
    this.idx -= 1;
    this.length -= 1;
  };
  this.shift = function () {
    if (this.head == null) return;
    if (this.length > 1) {
      let oldhead = this.head;
      this.head = oldhead.next;
      oldhead.next = null;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    }
    this.length -= 1;
    this.idx = this.length > 0 ? this.length : 0;
    this.fix();
  };
  this.unshift = function (val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = head;
      this.head = newNode;
    }
    this.length += 1;
    this.idx = this.length;
    this.fix();
  };
  this.splice = function (startidx, endval) {
    if (startidx < 0 || startidx >= this.length) return;
    let start = 0;
    let end = endval ? endval : this.length;
    console.log('end->', end);
    let fixedlen = this.length;
    if (startidx == 0) {
      while (start < Math.min(end, fixedlen)) {
        this.shift();
        start += 1;
        console.log(start);
      }
    } else if (startidx == this.length - 1 && end > 0) {
      this.pop();
    } else {
      let prev = this.map[startidx - 1];
      let des = this.map[startidx];
      while (start < Math.min(end, fixedlen) && des != null) {
        start += 1;
        des = des.next;
      }
      prev.next = des;
    }
    this.fix();
  };
  this.foreach = function (callback) {
    let current = this.head;
    let tempidx = 0;
    while (current !== null) {
      callback(current.value, tempidx);
      current = current.next;
      tempidx += 1;
    }
  };

  this.getbyidx = function (idx) {
    return this.map[idx].value;
  };
}
function Node(value) {
  this.value = value;
  this.next = null;
}

let list1 = new Arr();
list1.push(5);
list1.push(6);
list1.push(7);
// list1.foreach((value ,index)=>{
// console.log(value , index)
// })
console.log(list1.getbyidx(2));
list1.display();
