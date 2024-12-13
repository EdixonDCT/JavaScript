let word = prompt("Ingrese una palabra:");
let reversedLetters = "";
for (let i = word.length - 1; i >= 0; i--) {
    reversedLetters += `${word[i]}\n`;
}
alert(reversedLetters);