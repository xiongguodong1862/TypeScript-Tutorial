const tsconfig = {
  //部分编译选项  具体见：https://www.tslang.cn/docs/handbook/compiler-options.html
  "compilerOptions": {
    "module": "commonjs",//使用commonjs模块编译
    "noImplicitAny": true,//在表达式和声明上有隐含的any类型时报错
    "removeComments": true, //编译时移除注释
    "preserveConstEnums": true, //保留 const 和 enums 声明
    "sourceMap": true, //编译时生成对应的 .map 文件
    "outFile": "../../built/local/tsc.js", //将输出文件合并为一个文件
    "outDir": "../../dist", //重定向输出目录
    "target": "ES5",//制定ECMAScript版本 "ES3"（默认）， "ES5"， "ES6"/ "ES2015"， "ES2016"， "ES2017"或 "ESNext"。
    "allowJs":true,//是否允许编译js文件
    "checkJs":true,//在.js文件中报告错误，只有当 allowJs设置为true的时候起效
    "declaration":true,//是否生成相应的 .d.ts 声明文件
    "declarationDir":'../declare',//指定生成的声明文件的输出路径
  },
  "files":[
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "emitter.ts",
    "program.ts",
    "commandLineParser.ts",
    "tsc.ts",
    "diagnosticInformationMap.generated.ts"
  ],
  //指定的文件夹    **/  表示递归匹配任意子目录
  "include":[
    "src/**/*"
  ],
  //排除的文件夹
  "exclude":[
    "node_modules",
    "**/*.spec.ts"
  ]
};
