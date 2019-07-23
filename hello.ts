function sayHello(person:string) {
  return 'Hello' + person;
}
//TypeScript 编译的时候即使报错了，还是会生成编译结果
let user='XGod';
console.log(sayHello(user));
