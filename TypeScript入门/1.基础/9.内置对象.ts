//JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。

//ECMAScript的内置对象
/**
 * Boolean
 * Error
 * Date
 * RegExp
 * ...
 */
//我们可以在 TypeScript 中将变量定义为这些类型：
let b: Boolean = new Boolean(1);
let e: Error = new Error('error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;

//DOM 和 BOM 的内置对象
/**
 * Document
 * HTMLElement
 * Event
 * NodeList
 * ...
 */
let body:HTMLElement=document.body;
let allDiv:NodeList=document.querySelectorAll('div');
document.addEventListener('click',function (e: MouseEvent) {
  //do something
});
