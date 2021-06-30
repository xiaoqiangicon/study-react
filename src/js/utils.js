// new的模拟实现
function newFunc() {
  var obj = new Object(),
  Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
}


// 深拷贝1
let obj = {}
JSON.parse(JSON.stringify(obj));

// 深拷贝2
function deepCopy(source) {
  if (!isObject) return source;
  let target = Array.isArray(source) ? [] : {};

  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      if (typeof source[k] == 'object') {
        target[k] = deepCopy(source[k]);
      } else {
        target[k] = source[k]
      }
    }
  }
  return target;
}
function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

// 装饰器模式，在不改变已有对象的属性和方法的前提下，对
// 已有对象的属性和功能进行扩展

class Pancake {
  constructor() {
    this.name = '煎饼果子'
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return 5
  }
}

// 装饰器
class PancakeDecorator{
  // 需要传入煎饼果子的实例
  constructor(pancake) {
    this.pancake = pancake;
  }
  // 获取煎饼果子的名字
  getName() {
    return `${this.pancake.getName()}`
  }
}

class PancakeDecoratorWithEgg extends PancakeDecorator {
  getName() {
    return `${this.pancake.getName()} + 鸡蛋`
  }
}

// 柯里化拆分
function add(a, b, c) {
  return a + b + c;
}

function addCurrying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}
add(1, 2, 3)// 调用原函数
addCurrying(1)(2)(3)  // 调用柯里化函数
// 被柯里化的函数每次的返回值都是一个函数，并使用下一个参数作为形参，直到三个参数都传入后，返回的最后一个函数内部执行操作，其实是充分的利用了闭包的特性来实现的。
// 柯里化通用式
function currying(func, args) {
  // 形参个数
  var arity = func.length;
  // 上一次传入的参数
  var args = args || [];
  return function() {
    // 将参数转化为数组
    var _args = [].slice.call(arguments);
    // 将上次的参数与当前参数进行组合并修正传参顺序
    Array.prototype.unshift.apply(_args, args);

    // 如果参数不够，返回闭包函数继续收集参数
    if (_args.length < arity) {
      return currying.call(null, func, _args);
    }

    // 参数够了则直接执行被转化的函数
    return func.apply(null, _args);
  }
}
// 柯里化通用式ES6
function currying2(func, args = []) {
  let arity = func.length;

  return function(..._args) {
    _args.unshift(...args);

    if (_args.length < arity) {
      return currying(func, _args);
    }

    return func(..._args);
  }
}
// 柯里化的好处是可以帮助我们基于一个被转换函数
// 通过对函数的拆分实现不同功能的函数

// 反柯里化ES5
function uncurring(fn) {
  return function() {
    // 取出要执行fn的对象，同时从arguments中删除
    var obj = [].shift.call(arguments);
    return fn.apply(obj, arguments);
  }
}
// 反柯里化ES6
function uncurring2(fn) {
  return function(...args) {
    return fn.call(...args);
  }
}

// bind方法模拟，未实现绑定函数也能使用new操作符创建对象，把原函数当作构造器
Function.prototype.bind = function(context) {
  var self = this;
  var args = [].slice.call(arguments, 1);

  return function () {
    // 这个时候的arguments是指bind返回的函数传入的参数
    // 因为有时候不会在bind时一次性传入所有参数，在调用时继续传入
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs));
  }
}
// 实现可通过new创建对象
Function.prototype.bind2 = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fbound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(this instanceof self ? this : context, args.concat(bindArgs));
  }
  // 修改返回函数的prototype,为绑定函数的prototype,实例就可以继承函数的原型中的值
  fbound.prototype = this.prototype;
  return fbound;
}

// 数组展平
function flatten(arr) {
  return arr.reduce(function(prev, next) {
    return prev.concat(Array.isArray(next) ? flatten(next) : next);
  }, [])
}

// 手写promise 
function promi(executor) {
  let _this = this;
  _this.$$status = 'pending';
  _this.failCallBack = undefined;
  _this.successCallback = undefined;
  _this.error = undefined;
  executor(resolve.bind(this), reject.bind(this));

  function resolve() {
    if (_this.$$status === 'pending') {
      _this.$$status = 'full';
      _this.successCallback(params);
    }
  }
  function reject() {
    if (_this.$$status === 'pending') {
      _this.$$status = 'fail';
      _this.failCallBack(params);
    }
  }
}

promi.prototype.then = function(full, fail) {
  this.successCallback = full;
  this.failCallBack = fail;
}