//传统方法中，JavaScript通过构造函数实现类的概念，通过原型链实现继承，而在ES6中，新增了类的定义方式 class

//TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。

/**
 * 类的特点
 * 1。类(Class)：定义了一件事物的抽象特点，包含它的属性和方法
 *
 * 2。对象（Object）：类的实例，通过 new 生成
 *
 * 3。面向对象（OOP）的三大特性：封装、继承、多态
 *
 * 4。封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。
 *    外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
 *
 * 5。继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
 *
 * 6。多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。
 *    比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。
 *    此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
 *
 * 7。存取器（getter & setter）：用以改变属性的读取和赋值行为
 *
 * 8。修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
 *
 * 9。抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
 *
 * 10。接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。
 *    接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
 */


//ES6中类的用法

//属性和方法
/*class Animal{
  constructor(name) {
    this.name=name;
  }
  sayHi(){
    return `My name is ${this.name}`
  }
}
let a=new Animal('XGod');
console.log(a.sayHi());//My name is XGod*/


//类的继承
//使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。
/*class Cat extends Animal{
  constructor(name){
    super(name);
    console.log(this.name);
  }
  sayHi() {
    return `Meow, ${super.sayHi()}`;
  }
}
let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom*/


//存取器
/*class Animal2{
  constructor(name){
    this.name=name;
  }
  get name(){
    return 'XGod';
  }
  set name(value){
    console.log('setter: '+value);
  }
}
let d = new Animal('Kitty'); // setter: Kitty
d.name = 'Tom'; // setter: Tom
console.log(d.name); // Jack*/


//静态方法
/*class Animal3{
  static isAnimal(a){
    return a instanceof Animal3;
  }
}
let e = new Animal('Jack');
Animal3.isAnimal(e); // true
e.isAnimal(e); // TypeError: a.isAnimal is not a function*/


//ES7中类的方法
//实例属性
/*class Animal4 {
  name = 'Jack';

  constructor() {
    // ...
  }
}

let f = new Animal4();
console.log(f.name); // Jack*/


//静态属性
/*class Animal5 {
  static num = 42;

  constructor() {
    // ...
  }
}

console.log(Animal5.num); // 42*/


//TypeScript中类的用法
//public private 和protected
/*
 * public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
 * protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 **/

class Animal {
  public name;

  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom


class Animal2 {
  private name;

  public constructor(name) {
    this.name = name;
  }
}

let b = new Animal2('Jack');
//console.log(b.name); // JackError:(146, 15) TS2341: Property 'name' is private and only accessible within class 'Animal2'.
//b.name = 'Tom';//Error:(147, 15) TS2341: Property 'name' is private and only accessible within class 'Animal2'.

class Cat extends Animal2 {
  constructor(name) {
    super(name);
    //使用 private 修饰的属性或方法，在子类中也是不允许访问的：
    //而如果是用 protected 修饰，则允许在子类中访问：
    //console.log(this.name);//Error:(152, 22) TS2341: Property 'name' is private and only accessible within class 'Animal2'.
  }
}


//抽象类
//abstract用于定义抽象类和其中的抽象方法
//抽象类不允许被实例化
abstract class Animal3 {
  public name;

  public constructor(name) {
    this.name = name;
  }

  public abstract sayHi();
}

//let c=new Animal3();//Error:(173, 7) TS2511: Cannot create an instance of an abstract class.

//抽象类中的抽象方法必须被子类实现：
class Dog extends Animal3 {
  public name;

  constructor(name) {
    super(name);
    this.name = name;
  }

  //Error:(176, 7) TS2515: Non-abstract class 'Dog' does not implement inherited abstract member 'sayHi' from class 'Animal3'.
  sayHi() {
    console.log(this.name);
  }
}


//类的类型
class Animal4 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHi(): string {
    return `My name is ${this.name}`;
  }
}
let g:Animal4=new Animal4('XGod');
console.log(g.sayHi());// My name is XGod






