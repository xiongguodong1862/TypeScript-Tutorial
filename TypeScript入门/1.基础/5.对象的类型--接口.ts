//在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
/**
 * 什么是接口
 * 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，
 * 而具体如何行动需要由类（classes）去实现（implement）。
 * TypeScript 中的接口是一个非常灵活的概念，
 * 除了可用于对类的一部分行为进行抽象以外，
 * 也常用于对「对象的形状（Shape）」进行描述。
 */

//接口一般首字母大写
interface Person {
  name: string;
  age: number;
}

//一个变量指定了接口类型后，定义的变量不能多也不能少
//赋值的时候，变量的形状必须和接口的形状保持一致。
let tom: Person = {
  name: 'XGod',
  age: 25
};


//可选属性
//有时我们不需要去完全匹配一个接口，可以用可选属性
interface Person1 {
  name: string;
  age?: number
}

//仍然不允许添加接口中未定义的属性：
let xgod: Person1 = {
  name: 'XGod'
};


//任意属性
interface Person2 {
  name: string;
  age?: number;

  [propname: string]: any;
}

//一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
//即如果任意属性的类型未string，那么age就会报错，因为number类型不是string类型的子属性
let xgod2: Person2 = {
  name: 'XGod',
  age: 25,
  gender: 'male'
};


//只读属性
interface Person3 {
  readonly id: number;
  name: string;
  age?: number;

  [propname: string]: any;
}
//只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
//因此第一次给对象赋值的时候如果没有定义只读属性的值，那么后续也无法更改了
let xgod3:Person3={
  id:89757,
  name:'XGod',
  gender:'male',
  age:25
};
//xgod3.id=9527;//Error:(69, 7) TS2540: Cannot assign to 'id' because it is a read-only property.
