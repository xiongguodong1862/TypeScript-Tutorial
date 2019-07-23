//JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。

//布尔值
let isDone: boolean = false;

//注意，使用构造函数 Boolean 创造的对象不是布尔值：
//let createdByNewBoolean: boolean = new Boolean(1);
//Error:(7, 5) TS2322: Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.


//数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

//编译结果
/*var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;*/


//字符串
let myName: string = 'XGod';
let myAge: number = 25;
let sentence: string = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old`;

//空值
//JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
  alert('My name is XGod');
}

//Null 和 Undefined
//undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。
let u: undefined = undefined;
let n: null = null;
//与 void 的区别是，undefined 和 null 是所有类型的子类型。
// 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：而void不行
let num:number=undefined;//不会报错




















