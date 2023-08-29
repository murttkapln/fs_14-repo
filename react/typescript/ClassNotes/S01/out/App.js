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
/* let myTuple: [number, boolean,string];
myTuple = [13.4,false,'Hello World']; */
//Tuple Array
/* let arrTuples: [number,string][];

arrTuples = [[1, 'Mark'],[2, 'Anthony']]

arrTuples.push([3,'Ethan'])
 */
//Enums
/* enum Color {
    Red,
    Green = 100,
    Blue = Green +5,
    Yellow,
}

console.log(Color.Green)
console.log(Color.Blue)
console.log(Color.Yellow)

//String Enum
const enum Tshirt {
    XSmall = 'XS',
    Small = 'S',
    Medium = 'M'
}

console.log(Tshirt.XSmall)


//Mix Enum

enum Mixed {
    Red,
    Green,
    Blue = 'Mavi',
    Yellow = 'Sari',
    Magenta = 120,
    Brown,

} */
// Any & unknown
/* let a: any = 'Hello'

let b:number = a

let c : unknown = 5

let d: number = c as number

let e: any = c */
//void
/* function myFunction ():number {
    console.log('Hello World')
    return 3
} */
// Union type & Type narrowing
/* function checkNumber (n:(string | number)):string{

    
    //type narrowing
    if (typeof n === 'number'){

        n

    }else{

        n.

    }
    return 'Hello'
}


let xyz : string | boolean = '0';
xyz = 'Hello'
xyz = true
xyz = 3 */
//Aliases
/* type Check = string | number

let f: Check;
f = 0,
f = 'Merhaba'
f= false

let g :string | number
let h :string | number
let i :Check */
//String literals
/* type Car = 'BMW' | 'Audi'

let car1: Car = 'BMW'
let car2: Car = 'BMW'
let car3: Car = 'Fiat' */
//Object
/*  const car:{
    make:string,
    model:string,
    readonly year:number,
    sunroof?:boolean,
    age(CurrentYear:number):void
} = {
    make : 'Toyota',
    model: 'Corolla',
    year: 2020,
    age(CurrentYear:number){
        console.log(`age = ${CurrentYear-this.year}`)
    
    }
   
} */
// car.year = 2021 //read only ye atama yapılamaz
//car.age(2023)
//Intersection
/* type Book = {
    book_id: number;
    book_name: string;
  }
    
type Author = {
    Author_Id: number;
    Author_name: string;
  }
    
type Intersected_type = Book & Author;
    
  let book1: Intersected_type = {
    book_id: 1234,
    book_name: "Lord of the Rings",
    Author_Id: 1892,
    Author_name: "J. R. R. Tolkien",
  };

  let book2: Book ={
    book_id : 1,
    book_name: 'FS'

  }
     */
//Type Assertion
/* let score: unknown = '350';

console.log(score.length)
console.log((<string>score).length)
console.log((score as number).toFixed(2))
console.log(score) */
//functions
/* function selamla(greet:string, name?:string):string{
    if(!name) name = 'user'
    return `${greet} ${name}`
}

selamla('Hi' , 'Eren')
selamla('Hi', 2) */
//function overload
/* function add (a:string, b:string):string;
function add (a:number, b:number):number;
function add (a:any, b:any):any{
    return a+b
}

console.log(add('Hello ', 'Cohort14'))
console.log(add(3,'Merhaba'))
 */
//rest parameters
function add(num1, ...numbers) {
    let total = num1;
    numbers.forEach(number => total += number);
    console.log(total);
}
add(5);
add(1, 2, 3, 4, 5);
