

// - reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC
//   - reverse("Happy") ➞ yppaH


let str = prompt("Say  ur words")
function reversedWord (par) {
    let newStr ="" ;
    for(let i = par.length -1; i >= 0; i--) {
        newStr += par[i];
    }
    return newStr;
}
console.log(reversedWord(str));