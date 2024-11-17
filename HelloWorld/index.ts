let a: string
let b: number
let c: boolean

a = 'hello'
b = -99
c = true

console.log(a, b, c)

function count(x: number, y: number): number {
    return x + y
}

let result = count(1, 2)
console.log(result)

let str1: string

let z: any


let y: unknown

y = 99
y = 'hello'

let x: string

// 第一种
if (typeof y === 'string') {
    x = y
}

// 第二种
x = y as string

// 第三种
x = <string>a

let str2: unknown
str2 = 'Hello';
(str2 as string).toUpperCase() // 警告:"str3"的类型为"未知"


function logMessage(msg: string): void {
    console.log(msg)
}

logMessage('Hello World')

let person: { name: string, age?: number, [key: string]: any } // 索引签名
person = { name: 'tom', age: 18, city: 'BeiJing' }

let add: (a: number, b: number) => number;

add = function (a, b) {
    return a + b
}


let arr1: string[]
let arr2: Array<number>
arr1 = ['a', 'b']
arr2 = [100, 200]


let arr3: [number, ...string[]]
let arr4: [number, boolean?]

enum Direction {
    Up,
    Down,
    Left,
    Right
}

function walk(data: Direction) {
    console.log(data)
    if (data === Direction.Up) {
        console.log("向上走")
    } else if (data === Direction.Down) {
        console.log("向下走")
    } else if (data === Direction.Left) {
        console.log("向右走")
    } else if (data === Direction.Right) {
        console.log("向下走")
    }
}

type Status = number | string

function printStatus(data: Status): void {
    console.log(data)
}

// 面积
type Area = {
    height: number; // 高
    width: number; // 宽
}

// 地址
type Address = {
    num: number; // 楼号
    cell: number; // 单元号
    room: string // 房间号
}

type House = Area & Address

const house: House = {
    height: 100,
    width: 100,
    num: 3,
    cell: 4,
    room: '702'
}