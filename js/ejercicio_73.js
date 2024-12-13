let sentence = prompt("Ingrese una frase:");
let character = prompt("Ingrese una letra para contar cuántas veces aparece:");
let count = 0;
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === character) {
        count++;
    }
}
alert(`La letra '${character}' aparece ${count} veces en la frase.`);
