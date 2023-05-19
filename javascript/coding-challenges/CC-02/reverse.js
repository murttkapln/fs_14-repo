// Input : 'days. big make things Little' => Output :  **'Little things make big days.'**

// Input : 'Clarusway' => Output :  **'Clarusway'**


let word = prompt("Say  ur words")
function reversedWord (par) {
    console.log(word.split(" ").reverse().join(" "));
}
console.log(reversedWord(word));