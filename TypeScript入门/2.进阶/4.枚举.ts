//枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

//枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
console.log(Days['Sun'] === 0);//true
console.log(Days['Mon'] === 1);//true
console.log(Days['Tue'] === 2);//true
console.log(Days['Sat'] === 6);//true

console.log(Days[0] === 'Sun');//true
console.log(Days[1] === 'Mon');//true
console.log(Days[2] === 'Tue');//true
console.log(Days[6] === 'Sat');//true

//事实上，上面的例子会被编译为：
var Days1;
(function (Days) {
  Days[Days["Sun"] = 0] = "Sun";
  Days[Days["Mon"] = 1] = "Mon";
  Days[Days["Tue"] = 2] = "Tue";
  Days[Days["Wed"] = 3] = "Wed";
  Days[Days["Thu"] = 4] = "Thu";
  Days[Days["Fri"] = 5] = "Fri";
  Days[Days["Sat"] = 6] = "Sat";
})(Days1 || (Days1 = {}));


//手动赋值
//未手动赋值的枚举项会接着上一个枚举项递增。
//如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：
enum Days2 {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days2["Sun"] === 3); // true
console.log(Days2["Wed"] === 3); // true
console.log(Days2["Mon"] === 1); // true
console.log(Days2["Tue"] === 2); // true
console.log(Days2["Sat"] === 6); // true
console.log(Days[3] === "Sun"); // false
console.log(Days[3] === "Wed"); // true


//常数项和计算所得项
//枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。
enum Color {
  Red,
  Green,
  Blue = 'blue'.length
}

//如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：
enum Color2 {
  Red = 'red'.length,
  //Green,//Error:(54, 3) TS1061: Enum member must have initializer.
  //Blue,//Error:(55, 3) TS1061: Enum member must have initializer.
}

/*
  当满足以下条件时，枚举成员被当作是常数：
  不具有初始化函数并且之前的枚举成员是常数。在这种情况下，当前枚举成员的值为上一个枚举成员的值加 1。
  但第一个枚举元素是个例外。如果它没有初始化方法，那么它的初始值为 0。

  枚举成员使用常数枚举表达式初始化。
  常数枚举表达式是 TypeScript 表达式的子集，它可以在编译阶段求值。
  当一个表达式满足下面条件之一时，它就是一个常数枚举表达式：
    数字字面量

    引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的）如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用

    带括号的常数枚举表达式

    +, -, ~ 一元运算符应用于常数枚举表达式

    +, -, *, /, %, <<, >>, >>>, &, |, ^ 二元运算符，常数枚举表达式做为其一个操作对象。
    若常数枚举表达式求值后为 NaN 或 Infinity，则会在编译阶段报错

  所有其它情况的枚举成员被当作是需要计算得出的值。
*/


//常数枚举
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
//常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

