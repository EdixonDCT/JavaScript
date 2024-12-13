function eliminarVocales() {
    let cadena = prompt("Ingresa una cadena de texto:");
    let resultado = cadena.replace(/[aeiouAEIOU]/g, '');
    alert("La cadena sin vocales es: " + resultado);
}
eliminarVocales();
