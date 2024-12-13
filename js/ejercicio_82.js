function invertirCadena() {
    let cadena = prompt("Ingresa una cadena de texto:");
    alert("La cadena invertida es: " + cadena.split('').reverse().join(''));
}
invertirCadena();