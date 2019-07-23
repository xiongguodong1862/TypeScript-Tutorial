//接口除了可以用于对「对象的形状（shape）」进行描述，还可以对类对一部分进行抽象

//类实现接口
//实现（implements）是面向对象对一个重要概念
//一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，
// 这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。
// 这个特性大大提高了面向对象的灵活性。

//举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门
// 添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作
// 为一个接口，防盗门和车都去实现它：
interface Alarm {
  alert()
}

class Door {

}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('security door alarm');
  }
}

class Car implements Alarm {
  alert() {
    console.log('car alarm');
  }
}

//并且一个类可以实现多个接口
interface Light {
  lightOn();

  lightOff();
}

class Car2 implements Alarm, Light {
  alert() {
    console.log('Car alert');
  }

  lightOn() {
    console.log('Car light on');
  }

  lightOff() {
    console.log('Car light off');
  }
}


//接口继承接口
interface LightableAlarm extends Alarm {
  lightOn();

  lightOff();
}


//接口继承类
class Point {
  y: number;
  x: number;
}

interface Point3d extends Point {
  z: number
}

let point3d: Point3d = {x: 1, y: 2, z: 3};


//混合类型
//之前学习过，可以使用接口的方式来定义一个函数需要符合的形状：
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};

//有时候，一个函数还可以有自己的属性和方法：
interface Counter {
  (start: number): string;

  interval: number;

  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) {
    return start.toString();
  };
  counter.interval = 123;
  counter.reset = function () {
    counter.interval = 0;
  };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;




