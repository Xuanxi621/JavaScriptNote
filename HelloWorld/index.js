"use strict";
let a;
let b;
let c;
a = 'hello';
b = -99;
c = true;
console.log(a, b, c);
function count(x, y) {
    return x + y;
}
let result = count(1, 2);
console.log(result);
let str1;
let z;
let y;
y = 99;
y = 'hello';
let x;
// 第一种
if (typeof y === 'string') {
    x = y;
}
// 第二种
x = y;
// 第三种
x = a;
let str2;
str2 = 'Hello';
str2.toUpperCase(); // 警告:"str3"的类型为"未知"
function logMessage(msg) {
    console.log(msg);
}
logMessage('Hello World');
let person; // 索引签名
person = { name: 'tom', age: 18, city: 'BeiJing' };
let add;
add = function (a, b) {
    return a + b;
};
let arr1;
let arr2;
arr1 = ['a', 'b'];
arr2 = [100, 200];
let arr3;
let arr4;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function walk(data) {
    console.log(data);
    if (data === Direction.Up) {
        console.log("向上走");
    }
    else if (data === Direction.Down) {
        console.log("向下走");
    }
    else if (data === Direction.Left) {
        console.log("向右走");
    }
    else if (data === Direction.Right) {
        console.log("向下走");
    }
}
function printStatus(data) {
    console.log(data);
}
const house = {
    height: 100,
    width: 100,
    num: 3,
    cell: 4,
    room: '702'
};
