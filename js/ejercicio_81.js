function mayorDelArreglo() {
    let arreglo = prompt("Ingresa los números del arreglo, separados por comas:").split(",").map(Number);
    alert("El mayor del arreglo es: " + Math.max(...arreglo));
}
mayorDelArreglo();