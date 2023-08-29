/* interface Person {
    name:string;
}

const person1: Person = {
    name:'Mark'
} */
/* interface Calender {
    events: string[];
    addEvents(event: string): void;
}


class LMSCalender implements Calender{
    constructor(public events: string[]){}

    addEvents(event: string): void {
        this.events.push(event);
    }
}

const cohort14= new LMSCalender(['HTML','JS'])


cohort14.addEvents('React')
cohort14.addEvents('TS')
cohort14.addEvents('NextJS')
console.log(cohort14) */
// interface Point {
//     x:number;
// }
// interface Point {
//     y:number;
// }
// const point1: Point = {x:50,y:30}
///Type Intersection
// type Pointx = {
//     x: number
// }
// type Pointy = {
//     y: number
// }
// type PointI = Pointx & Pointy
// const point2: PointI = {x:50,y:30}
/* interface Color {
    color: {r: number, g: number, b: number};
}

interface Shape {
    area: number;
}

const red:Color = {color: {r: 255, g:0, b:0}}

let shape1: Shape = {area:255}

class Square implements Color, Shape {
    constructor( public color: {r: number, g: number, b:number}, public area: number){
    }
}

const sq = new Square(red.color , shape1.area)
const sq2 = new Square( {r: 0, g:255, b:0} , 121)
console.log(sq); */
//Fonksiyon imzası interface
/* interface Sum{
    (num1: number, num2: number): number;
}

interface SumString {
    (n1: string, n2: string): string;
}

function add(n1: number, n2: number): number{
    return n1+ n2;
}

function conC(n1: string, n2: string): string{
    return n1+n2;
}

let arithemticAdd:Sum = add;

let concatAdd : SumString = conC

console.log(arithemticAdd(2,5));
console.log(concatAdd('Hello ','World')); */
//Generics
//Built in Generic
/* const names: string[] = []

const names2: Array<string> = ['Hello ', 'World']
const nums: Array<number> = [1,2,3] */
//Problem / solution 
// function getArray<T>(items:T[]): T[]{
//     return new Array().concat(items)
// }
// let numArr = getArray([1,2,3,4])
// let strArr = getArray(['john', 'Mike', 'Alan'])
// strArr.push(3)  /* Error */
// strArr.push(true) /* Error */
// numArr.push('Sally') /* Error */
/*  interface Result<T> {
    data: T | null
}

const myData:Result<number> = {data: 35}
const myData2:Result<string> = {data: '35'}
const myData3:Result<boolean> = {data:35}
const myData4:Result<boolean> = {data:null}

myData.data = '23' */
//Class
/* class KeyValuePair<K,V> {
    constructor(public key: K, public value: V) {}
  }
  
  let kvp = new KeyValuePair<number, string>(1,'a')
  let shorter = new KeyValuePair('a',1)

shorter.key = 1
kvp.key = 'a' */
/* function displayType<T, U>(param1: T, param2: U) {
    console.log(`paraml: ${typeof(param1)}, param2: ${typeof(param2)}`);
    }
    displayType<number, string>(34, "Istanbul");
    displayType<string, number>("Price", 250);
    displayType(console.log, 5 > 8); */
/*     interface Product {
        name: string;
        price: number;
    }
    function update<T extends object, U extends keyof T>(obj: T, prop: U, newValue: T[U]){
        obj[prop] = newValue;
    }
    
    const product:Product = {name: 'TV', price: 450}
    update(product, 'name', 'Monitor');
    update(product, 'price', 650)
    console.log(product)
 */
