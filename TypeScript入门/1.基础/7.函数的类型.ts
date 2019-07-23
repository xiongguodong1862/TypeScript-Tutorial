//函数是 JavaScript 中的一等公民

//函数声明（Function Declaration）
//一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

function sum(x: number, y: number): number {
  return x + y;
}

//输入多余的（或者少于要求的）参数，是不被允许的：
//sum(1, 2, 3);//Error:(9, 9) TS2554: Expected 2 arguments, but got 3.


//函数表达式
let sum2 = function (x: number, y: number): number {
  return x + y;
};
//sum2是通过赋值操作进行类型推论而推断出来的
//如果需要我们手动给 sum2 添加类型，则应该是这样：
let mySum: (x: number, y: number) => number = function (x: number, y: number) {
  return x + y;
};
//注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。


//用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
  return source.search(subString) !== -1;
};


//可选参数
//与接口中的可选属性类似，我们用 ? 表示可选的参数：
//可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了：
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}


//参数默认值
//TypeScript 会将添加了默认值的参数识别为可选参数
//此时就不受「可选参数必须接在必需参数后面」的限制了：
function buildName2(firstName: string = 'XGod', lastName: string = 'cat'): string {
  return firstName + lastName;
}


//剩余参数
//ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）
//事实上，items 是一个数组。所以我们可以用数组的类型来定义它：
//rest 参数只能是最后一个参数
function push(array, ...items: any[]) {
  items.forEach(item => {
    array.push(item);
  })
}


//重载
//重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
//利用联合类型，我们可以这么实现：
function reverse(x: number | string): number | string {
  if (typeof x === 'string') {
    return x.split('').reverse().join('');
  } else if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  }
}

//然而这样还是不够精确，我们希望输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。
// 这时，我们可以使用重载定义多个 reverse 的函数类型：
function reverse2(x: number): number ;
function reverse2(x: string): string ;
function reverse2(x: number | string): number | string {
  if (typeof x === 'string') {
    return x.split('').reverse().join('');
  } else if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  }
}
//上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
// 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。























