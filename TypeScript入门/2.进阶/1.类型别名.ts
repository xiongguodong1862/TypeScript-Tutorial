//类型别名用来给一个类型起个新名字。
//例子
type Name = string; //string类型的别名被命名为Name
type NameResolver = () => string; //function类型的别名被命名为NameResolver
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}
