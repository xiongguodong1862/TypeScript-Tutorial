//字符串字面量类型用来约束取值只能是某几个字符串中的一个。
//例子
//我们使用 type 定了一个字符串字面量类型 EventNames，它只能取三种字符串中的一种。
type EventNames = 'click' | 'scroll' | 'mousemove';

function handleEvent(ele: Element, event: EventNames) {
  //do something
}

handleEvent(document.getElementById('hello'), 'scroll');
//Error:(10, 46) TS2345: Argument of type '"dbclick"' is not assignable to parameter of type 'EventNames'.
//handleEvent(document.getElementById('world'), 'dbclick');


//类型别名与字符串字面量类型都是使用 type 进行定义。
