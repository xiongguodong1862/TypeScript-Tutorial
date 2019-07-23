//泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

//例子

function createArray(length: number, value: any): Array<any> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray(3, 'x');//['x','x','x']

//这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型：
// Array<any> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 value 的类型。
// 这时候，泛型就派上用场了：
function createArray2<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

//我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，
// 在后面的输入 value: T 和输出 Array<T> 中即可使用了。
//在调用对时候可以不手动指定，而让类型推论自动推算出来：
createArray2<string>(3, 'x');//['x','x','x']


//多个类型参数
//定义泛型对时候，可以一次定义多个类型参数
function swap<T, U>(turple: [T, U]): [U, T] {
  return [turple[1], turple[0]];
}


//泛型约束
//在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作他的属性或方法
function loggingIdentity<T>(arg: T): T {
  //泛型 T 不一定包含属性 length，所以编译的时候报错了。
  //console.log(arg.length);//Error:(42, 19) TS2339: Property 'length' does not exist on type 'T'.
  return arg;
}


//对泛型进行约束，只允许这个函数传入那些包含length属性对变量，这就是泛型约束
interface Lengthwise {
  length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

//此时传入不带有length属性对参数就会报错
//loggingIdentity2(7);//Error:(57, 18) TS2345: Argument of type '7' is not assignable to parameter of type 'Lengthwise'.

//多个类型参数之间也可以互相约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (const id in source) {
    if (source.hasOwnProperty(id)) {
      target[id] = (<T>source)[id];
    }
  }
  return target;
}

//我们使用了两个类型参数，其中要求 T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段。
let x = {a: 1, b: 2, c: 3, d: 4};
copyFields(x, {b: 10, d: 20});


//泛型接口
//可以使用含有泛型对接口来定义函数的形状
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray3: CreateArrayFunc;
createArray3 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

//泛型接口的泛型参数还可以提前到接口名上
interface CreateArrayFunc2<T> {
  (length: number, value: T): Array<T>;
}


//泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x: number, y: number): number {
  return x + y;
};


//泛型参数的默认类型
//在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。
// 当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。
function createArray4<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}








