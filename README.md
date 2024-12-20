# JavaScriptNote
JavaSrcript的学习笔记

> 发明人：布兰登·艾奇 Brendan Eich 1997年06月
>
> 2015年 ES6

`ECMAScript是一种语言标准,JavaScript是对ECMScript的一种实现`

JavaScript组成部分

- 核心 ECMAScript
  - 变量
  - 测试语句
  - 数据类型
  - 运算符
  - 数据类型转换
  - 流程控制
  - 常用内置对象
    - Array
    - Date
    - String
    - Math内置对象
    - Function函数
- 文档对象模型 (DOM)
  - DOM节点
  - 获取DOM的三种方式
  - 值的操作
  - 样式操作
  - 属性操作
  - DOM操作
- 浏览器对象模型 (BOM)

## Js文件引入

```html
<script type="text/javascript">
	// 编写js代码
</script>
<!-- 外部js -->
<script type="text/javascript" src="js/index.js" ></script>
```

## 变量类型

>基本类型
>
>- Number
>- String
>- Boolean
>- undefind
>- null
>
>引用数据类型
>
>- Object
>- Array
>- Function

### 类型查看

```js
var a = 3
alert(typeof a)
```

### 隐式转换

```js
var num = 234;
var myStr = num +"";
alert(typeof myStr);
var myNum = Number(num);
var myStr2 = myNum.toString()
```

## Switch

```js
var weather = 'sunny';
swich(weather){
    case 'sunny':
    	alert(1)
    	break; //编写Switch语句 小心Break case穿透
    case 'rainy':
    	alert(2)
    	break;
    default:
    	alert(3)
    	break;
}
```

## 三元运算符

```js
(条件)?run this code: run this code;
```

## 死循环

```js
for(;;){
}
```

## window与var

```js
var a = 3 等同与 window.a =3
```

## 数组的栈

>栈 lifo `last - in - first -out` 方法. push() pop() 队列方法

```js
// push() 往数组的最后一项添加内容
var newLength = arr.push('newElement');
// pop() 从数组末尾删除最后一项
var lastItem = arr.pop()
```

>队列 fifo 先进先出 unshift() shift()

```js
var newlength = arr.unshift('newElement'); // 返回最新数组的长度，往第一项添加内容
var firstItem = arr.shift(); // 删除数组的第一项元素
```

## 数组排序

```js
arr.reverse() // 数据倒序
arr.sort // 排序 升序或者降序


function compare(a,b){
    // a 位于 b之前
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }else{
        return 0;
    }
}

arr.sort(compare); // 升序
```

## ASCII码

```js
var a = '10';
a.charCodeAt();
```

## 数组的操作方法

```js
var colors = ['red','blue']
var newColors = colors.concat('green'); // return ['red','blue','green']
var newColors = newColors.slice(1,2); //return ['blue']

arr.splice(start:int,deleteCount:int,items...:any)
```

## 数组的位置方法

```js
// 位置方法 indexOf() lastIndex()

arr.indexOf(element) // return element_index 查不到 返回-1
```

## 数组的迭代方法

```js
var number = [1,2,3,4,5,6];

// 1. filter
var filterResult = number.filter(function(item,index,array){
    return item > 5;
});

// 2. map
var mapResult = number.map(function(item,index,array){
    return item * 2;
})

// 3. forEach

mapResult.forEach(function(item,index){
    console.log(item);
})

```

## 字符串方法

```js
var str = 'Hello World';

str.length // 获取字符串长度
str.charAt(1) // 返回e 获取指定的字符
str.charCodeAt(1) //返回e 的Ascll码
str.trim() // 删除字符串前后空白
str.LocaleLowerCase()  // 国际 小写转换
str.toUpperCase() // 全部转换成大写
str.toLowerCase() // 全部转换成小写
```

## Date

```js
var now = new Date() // Date日期对象
var xmas = new Date('December 25,1995 13:30:00') 
now.getData() // 获取月份的第几天(1~31)
now.getMonth() // 获取月份(0~11)
now.getFullYear() // 获取年份
now.getDay() // 获取一星期中的第几天(0~6)
now.getHours() // 获取小时(0~23)
now.getMinutes()  // 获取分钟(0~59)
now.getSeconds() // 获取秒(0~59)

// 日期格式化
now.toDateString() // 星期几 月份 日 年
now.toTimeString() // 时 分 秒 时区
now.toLocaleDateString()
now.toLocaleTimeString()
```

## 字符串和数值

```js
var str = '124.555';
// 转换整形
parseInt(str);
// 转换浮点
parseFloat(str);
// NaN - not a number
Number(str); // Nan
// 判断是否是Nan
isNan(Number(str));
// 四舍五入
num.toFixed([指定位数]);
```

## BOM

> 浏览器对象模型
>
> - window
>   - alert()  - 弹出框
>   - confirm() - 弹出框 - 选项
>   - prompt() - 弹出框 - 输入
>   - setInterval() // 周期循环操作 - 一般搭配clearInterval使用
>   - setTimeout() // 延迟性操作
>
> - location
>   - href
>   - hash
>   - url
>   - reload
>   - navigator 检测插件 plugins
>   - ....
>
> - screen
>
> - histroy

## DOM

>Document Object Model 文档对象模型
>
>- 动态刷新不影响静态

```js
// 节点 node
// 1. 元素节点 element node
// 2. 文本节点
// 3. 属性节点
```

# TypeScript

> 静态类型检查

## 命令行编译

```shell
npm i typescript -g
tsc filename
```

## 自动化编译

```shell
tsc --init 
```

:gear:生成tsconfig.json

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
    // "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
    // "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
    // "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
    // "noUncheckedSideEffectImports": true,             /* Check side effect imports. */
    // "resolveJsonModule": true,                        /* Enable importing .json files. */
    // "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
    // "isolatedDeclarations": true,                     /* Require sufficient annotation on exports so other tools can trivially generate declaration files. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "strictBuiltinIteratorReturn": true,              /* Built-in iterators are instantiated with a 'TReturn' type of 'undefined' instead of 'any'. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```

```shell
tsc --watch
```

## 数据类型

>JavaScript中的数据类型
>
>- string
>- number
>- boolean
>- null
>- undefined
>- bigint
>- symbol
>- object - 存储的类型是[非原始类型]
>  - 其中Object 包含 Array、Function、Date、Error等...
>
>TypeScript中的数据类型
>
>- 上述所有JavaScript类型
>
>- 六个新类型
>  - any - 任意数据类型 - 可以赋值任意数据类型
>  - unknown - 未知
>  - never - typeScript 主动推断出来的 - 没有意义
>  - void - 包含undefined ，但是 `void` 表达的语义超越了单纯的undefined，它是一种意图上的约定
>  - tuple - 特殊的数组
>  - enum - 一组命名的常量
>- 两个用于自定义类型的方式
>  - type
>  - interface

## 自动装箱

```js
// 原始类型字符串
let str = 'Hello';

// 当访问str.length时，JavaScript引擎做了以下工作
let size = (function () {
    // 1.自动装箱:创建一个临时的String对象包装原始字符串
    let tempStringObject = new String(str);
    // 2.访问String对象的length属性
    let lengthValue = tempStringObject.length;

    //3.销毁临时对象，返回长度值
    // (JavaScript引擎自动处理对象销毁,开发者无感知)
    return lengthValue;
})();

console.log(size); // 输出: 5
```

