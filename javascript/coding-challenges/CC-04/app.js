
//* A = [12, 14, 16]; 
//* B = [11, 13, 17];
//* expectedOutput = [11, 12, 13, 14, 16, 17]



const  A = [12, 14, 16];

const B = [11, 13, 17];

const myArray = A.concat(B).sort((a,b) => a - b)

console.log(myArray);
