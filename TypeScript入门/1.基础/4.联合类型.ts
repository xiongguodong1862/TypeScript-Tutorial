//联合类型（Union Types）表示取值可以为多种类型中的一种。
//联合类型使用 | 分隔每个类型。
let myNumber:string|number;
myNumber='seven';
myNumber=7;
//myNumber=true;//TS2322: Type 'true' is not assignable to type 'string | number'.


//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，
// 我们只能访问此联合类型的所有类型里共有的属性或方法：
/*function getLength1(something: string|number):number {
  //TS2339: Property 'length' does not exist on type 'string | number'.
  //Property 'length' does not exist on type 'number'.
  return something.length;
}*/
//但是string 和number 的共有属性 toString 访问是没问题的
function getLength2(something: string|number):string {
  return something.toString();
}
