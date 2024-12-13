let inputEco;
let counter = 0;
while (true) {
    inputEco = prompt("Escribe algo (o escribe 'salir' para terminar):");
    counter++;
    if (inputEco.toLowerCase() === "salir") {
        break;
    }
    alert(`Eco (${counter}): ${inputEco}`);
}