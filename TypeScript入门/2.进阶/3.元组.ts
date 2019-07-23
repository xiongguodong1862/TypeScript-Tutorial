//数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象
let xcatliu: [string, number] = ['XGod', 25];

//当赋值或访问一个已知索引的元素时，会得到正确的类型：
let xcatliu2: [string, number];
xcatliu2[0] = 'XGod';
xcatliu2[1] = 25;

xcatliu2[0].slice(1);
xcatliu2[1].toFixed(2);

//超界的元素
//当添加超出界限的元素是，他的类型会被限制为元组中每个类型的联合类型
let xcatliu3:[string,number];
xcatliu3=['XGod',25];
xcatliu3.push('male');
//Error:(17, 15) TS2345: Argument of type 'true' is not assignable to parameter of type 'string | number'.
//xcatliu3.push(true);
