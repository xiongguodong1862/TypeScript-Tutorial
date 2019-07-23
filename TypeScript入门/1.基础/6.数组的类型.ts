//在 TypeScript 中，数组类型有多种定义方式，比较灵活。

//「类型 + 方括号」表示法
let fibonacci: number[] = [1, 2, 3, 4, 5];

//数组的项中不允许出现其他类型
//let fibonacci2: number[] = [1, 2, '3', 4, 5];//Error:(5, 30) TS2322: Type 'string' is not assignable to type 'number'.

//数组的方法的参数也会根据数组在定义的时候约定类型进行限制
//fibonacci.push('8');//Error:(11, 16) TS2345: Argument of type '"8"' is not assignable to parameter of type 'number'.


//数组泛型
let fibonacci3: Array<number> = [1, 2, 3, 4, 5];


//用接口表示
interface NumberArray {
  [index:number]:number
}
let fibonacci4:NumberArray=[1,2,3,4,5];


//any在数组中的应用
let list:any[]=['XGod',25,{gender:'male'}];


//类数组
//类数组（Array-like Object）不是数组类型，比如 arguments：
function sum() {
  //Error:(31, 7) TS2740: Type 'IArguments' is missing the following
  //properties from type 'number[]': pop, push, concat, join, and 15 more.
  //let args:number[]=arguments;

  //事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
  let args:IArguments=arguments;
}




