let it = makeIterator(['a', 'b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());

function makeIterator(array) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true}
    }
  }
}

// 对象配置Iterator属性
class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() { return this; }

  next() {
    let value = this.value;
    if (value < this.stop) {
      this.value++;
      return {done: false, value: value};
    }
    return {done: true, value: undefined};
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}

for (let value of range(0, 3)) {
  console.log(value);
}

function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  })
};

async function fiveInAsync() {
  for(let i = 1; i <= 5; i++) {
    console.log(i);
    await sleep(1000);
  }
}
fiveInAsync();