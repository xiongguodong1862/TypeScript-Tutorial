//目前 TypeScript 的代码检查主要有两个方案：使用 TSLint 或使用 ESLint + typescript-eslint-parser。

//代码检查主要是用来发现代码错误、统一代码风格。

//TypeScript 关注的重心是类型的匹配，而不是代码风格
//因此还需要代码检查


//在 TypeScript 中使用 ESLint
/*
* 安装 ESLint
* ESLint 可以安装在当前项目中或全局环境下，因为代码检查是项目的重要组成部分，所以我们一般会将它安装在当前项目中。可以运行下面的脚本来安装：
* npm install eslint --save-dev
*
* 由于 ESLint 默认使用 Espree 进行语法解析，无法识别 TypeScript 的一些语法，
* 故我们需要安装 typescript-eslint-parser，替代掉默认的解析器，别忘了同时安装 typescript：
* npm install typescript typescript-eslint-parser --save-dev
*
* 由于 typescript-eslint-parser 对一部分 ESLint 规则支持性不好，
* 故我们需要安装 eslint-plugin-typescript，弥补一些支持性不好的规则。
* npm install eslint-plugin-typescript --save-dev
* */

/**
 * 创建配置文件
 * ESLint 需要一个配置文件来决定对哪些规则进行检查，配置文件的名称一般是 .eslintrc.js 或 .eslintrc.json。
 */
//.eslintrc.js配置如下
/*module.exports = {
  parser: 'typescript-eslint-parser',
  plugins: [
    'typescript'
  ],
  rules: {
    // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
    'typescript/class-name-casing': 'error'
  }
};*/


//检查一个ts文件
//创建一个新文件 index.ts，将以下内容复制进去：
interface person {
  name: string;
  age: number;
}

let tom: person = {
  name: 'XGod',
  age: 25
};

if (tom.age == 25) {
  console.log(tom.name + ' is 25 years old');
}
//然后执行以下命令：
// ./node_modules/.bin/eslint index.ts

//则会得到如下报错信息：
// /path/to/index.ts
//    1:11  error  Interface 'person' must be PascalCased  typescript/class-name-casing
//   11:13  error  Expected '===' and instead saw '=='     eqeqeq
//
// ✖ 2 problems (2 errors, 0 warnings)


//可是每次执行这么长一段脚本颇有不便，我们可以通过在 package.json 中添加一个 script 来创建一个 npm script 来简化这个步骤：
/*{
  "scripts": {
    "eslint": "eslint index.ts"
  }
}*/
//这时只需执行 npm run eslint 即可。



//检查整个项目的ts文件
//将 package.json 中的 eslint 脚本改为对一个目录进行检查。由于 eslint 默认不会检查 .ts 后缀的文件，所以需要加上参数 --ext .ts
/*{
  "scripts": {
    "eslint": "eslint src --ext .ts"
  }
}*/


//使用 AlloyTeam 的 ESLint 配置
//推荐使用 AlloyTeam ESLint 规则中的 TypeScript 版本，它已经为我们提供了一套完善的配置规则。
//安装：
//npm install --save-dev eslint typescript typescript-eslint-parser eslint-plugin-typescript eslint-config-alloy

//.eslintrc.js
/*
module.exports = {
  extends: [
    'eslint-config-alloy/typescript',
  ],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // jQuery: false,
    // $: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // @fixable 一个缩进必须用两个空格替代
    // 'indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
  }
};*/



//使用 ESLint 检查 tsx 文件
//如果需要同时支持对 tsx 文件的检查，则需要对以上步骤做一些调整：
//安装 eslint-plugin-react
//npm install --save-dev eslint-plugin-react
//package.json 中的 scripts.eslint 添加 .tsx 后缀
/*{
  "scripts": {
    "eslint": "eslint src --ext .ts,.tsx"
  }
}*/




// 在 TypeScript 中使用 TSLint
// TSLint 的使用比较简单，参考官网的步骤安装到本地即可：
// npm install --save-dev tslint
// 创建配置文件 tslint.json
// {
//     "rules": {
//         // 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
//         "triple-equals": [
//             true,
//             "allow-null-check"
//         ]
//     },
//     "linterOptions": {
//         "exclude": [
//             "**/node_modules/**"
//         ]
//     }
// }
// 为 package.json 添加 tslint 脚本
// {
//     "scripts": {
//         "tslint": "tslint --project . src/**/*.ts src/**/*.tsx",
//     }
// }
// 其中 --project . 会要求 tslint 使用当前目录的 tsconfig.json 配置来获取类型信息，很多规则需要类型信息才能生效。
// 此时执行 npm run tslint 即可检查整个项目。










