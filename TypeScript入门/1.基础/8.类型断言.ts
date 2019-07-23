//类型断言（Type Assertion）可以用来手动指定一个值的类型。
/*
 * 语法
 * <类型>值
 * 或
 * 值 as 类型
 * 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种。
 * 因为第一种在tsx中可能会被当作标签解析
 * */

//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，
// 我们只能访问此联合类型的所有类型里共有的属性或方法：
/*function getLength(something:string|number):number {
  //Error:(12, 20) TS2339: Property 'length' does not exist on type 'string | number'.
  //   Property 'length' does not exist on type 'number'.
  return something.length;
}*/

//而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型的属性或方法，比如：
/*function getLength2(something:string|number):number {
  //Error:(21, 16) TS2339: Property 'length' does not exist on type 'string | number'.
  //   Property 'length' does not exist on type 'number'.
  if(something.length){
    //Error:(24, 22) TS2339: Property 'length' does not exist on type 'string | number'.
    //  Property 'length' does not exist on type 'number'.
    return something.length;
  }else{
    return something.toString.length;
  }
}*/

//这个时候可以使用类型断言，将something断言为string
function getLength3(something:string|number):number {
  if(<string>something){
    return (<string>something).length
  }else{
    return something.toString.length;
  }
}

//类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：
/*function getLength4(something: string | number):number {
  //Error:(43, 10) TS2352: Conversion of type 'string | number' to type 'boolean'
  // may be a mistake because neither type sufficiently overlaps with the other.
  // If this was intentional, convert the expression to 'unknown' first.
  //   Type 'number' is not comparable to type 'boolean'.
  return <boolean>something;
}*/
