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
let myTuple;
myTuple = [13.4, false, 'Hello World'];
//Tuple Array
let arrTuples;
arrTuples = [[1, 'Mark'], [2, 'Anthony']];
arrTuples.push([3, 'Ethan']);
console.log(100 /* Color.Green */);
console.log(105 /* Color.Blue */);
console.log(106 /* Color.Yellow */);
//* String Enum
var Tshirt;
(function (Tshirt) {
    Tshirt["Xsmall"] = "XS";
    Tshirt["Small"] = "S";
    Tshirt["Medium"] = "M";
})(Tshirt || (Tshirt = {}));
console.log(Tshirt.Xsmall);
