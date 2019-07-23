//任意值（Any）用来表示允许赋值为任意类型。
let whateverValue:any='seven';
whateverValue=7;//允许
//声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

//如果一个变量在声明的时候未声明类型，那么他会被识别为任意值类型
let something;
something = 'seven';
something = 7;

something.setName('Tom');

