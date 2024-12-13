function numeroATexto() {
    let numero = parseInt(prompt("Ingresa un número entre 0 y 5:"));
    let resultado;

    if (numero === 0) {
        resultado = "cero";
    } else if (numero === 1) {
        resultado = "uno";
    } else if (numero === 2) {
        resultado = "dos";
    } else if (numero === 3) {
        resultado = "tres";
    } else if (numero === 4) {
        resultado = "cuatro";
    } else if (numero === 5) {
        resultado = "cinco";
    } else {
        resultado = "Número fuera de rango";
    }

    alert("El número en texto es: " + resultado);
}
numeroATexto();
