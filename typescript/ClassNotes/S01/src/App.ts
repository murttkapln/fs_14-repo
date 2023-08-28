// console.log('Hello World');

// const button = document.getElementById('submit');
// const a = document.getElementById('input1')! as HTMLInputElement;
// const b = document.getElementById('input2')! as HTMLInputElement;
// const result = document.getElementById('result');

// function add(a: number, b: number) {
//     return a + b;
// }
// button.addEventListener('click', function () {
//     result.innerText = `${add(+a.value, +b.value)}`;
// });

// Type Annotation

/* let x : number = 5
let y = 'Hello World'
y = x

let z;

z = false
z = 5
z = 'Hello World'

x = z */

//Data types

// Array

/* let num : number[] = [1,'string',false]

let a: string[] = []
let b = []

a.push('5')
a.push(5)

b.push('5')
b.push(5)

 */

//Tuples

// let myTuple: [number, boolean, string];
// myTuple = [13.4, false, "Hello World"];

// //Tuple Array
// let arrTuples: [number, string][];

// arrTuples = [
//   [1, "Mark"],
//   [2, "Anthony"],
// ];

// arrTuples.push([3, "Ethan"]);

// //*Enums
// const enum Color {
//   Red,
//   Green = 100,
//   Blue = Green + 5,
//   Yellow,
// }

// console.log(Color.Green);
// console.log(Color.Blue);
// console.log(Color.Yellow);

// //* String Enum

// const enum Tshirt {
//   Xsmall = "XS",
//   Small = "S",
//   Medium = "M",
// }

// console.log(Tshirt.Xsmall);
// //* Mix Enum
// enum Mixed {
//   Red,
//   Green,
//   Blue = "Mavi",
//   Yellow = "Sari",
//   Magenta = 120,
//   Brown,
// }



//* Any & Unknown

// let a : any = "Hello"
// let b: number = a,
// let c: unknown = 5,
// let d : 


// Union type & Type narrowi,ng
// function checkNumber (n:(string | number)): string{
//     //type narrowing
//     if (typeof n === "number" {
//         n
//     }else{
//         n.
//     }
//     return "Hello")
// }


type Check = string | number
