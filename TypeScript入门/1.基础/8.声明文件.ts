//当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
//什么是声明语句
//假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 <script> 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。
//我们通常这样获取一个 id 是 foo 的元素：

/*
$('#foo');
// or
jQuery('#foo');
*/


//但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西：
jQuery('#foo');// ERROR: Cannot find name 'jQuery'.

//这时，我们需要使用 declare var 来定义它的类型2：
declare var jQuery: (selector: string) => any;
//declare var 并没有真的定义一个变量，只是定义了全局变量 jQuery 的类型，
// 仅仅会用于编译时的检查，在编译结果中会被删除。
jQuery('#foo');


//通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件
//并且声明文件必需以 .d.ts 为后缀。
declare var jQuery: (selector: string) => any;

//使用 @types 统一管理第三方库的声明文件 例如
//npm install @types/jquery --save-dev

/**
 * 全局变量的声明文件主要有以下几种语法：
 * declare var 声明全局变量 还有declare let和declare const
 * 一般来说，全局变量都是禁止修改的常量，所以大部分情况都应该使用 const 而不是 var 或 let。
 * declare let jQuery: (selector: string) => any;
 *
 *
 * declare function 声明全局方法
 * declare function 用来定义全局函数的类型。jQuery 其实就是一个函数，所以也可以用 function 来定义：
 * declare function jQuery(selector: string): any;
 * 在函数类型的声明语句中，函数重载也是支持的
 * declare function jQuery(domReadyCallback: () => any): any;
 *
 * declare class 声明全局类
 * declare class Animal {
 *   name: string;
 *   constructor(name: string);
 *   sayHi(): string;
 * }
 *
 *
 *
 * declare enum 声明全局枚举类型
 * 使用 declare enum 定义的枚举类型也称作外部枚举（Ambient Enums）
 * declare enum Directions {
 *   Up,
 *   Down,
 *   Left,
 *   Right
 * }
 *
 *
 * declare namespace 声明（含有子属性的）全局对象
 * namespace 是 ts 早期时为了解决模块化而创造的关键字，中文称为命名空间。
 * 随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的 namespace，
 * 而推荐使用 ES6 的模块化方案了，故我们不再需要学习 namespace 的使用了。
 *
 *
 * interface 和 type 声明全局类型
 * 除了全局变量之外，可能有一些类型我们也希望能暴露出来。
 * 在类型声明文件中，我们可以直接使用 interface 或 type 来声明一个全局的接口或类型
 * interface AjaxSettings {
 *   method?: 'GET' | 'POST'
 *   data?: any;
 * }
 * declare namespace jQuery {
 *   function ajax(url: string, settings?: AjaxSettings): void;
 * }
 *
 */


/**
 * npm 包的声明文件主要有以下几种语法：
 * export 导出变量
 * export namespace 导出（含有子属性的）对象
 * export default ES6 默认导出
 * export = commonjs 导出模块
 */
