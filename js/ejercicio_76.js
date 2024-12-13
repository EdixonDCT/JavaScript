function esParOImpar() {
    let numero = parseInt(prompt("Ingresa un número:"));
    alert("El número es " + (numero % 2 === 0 ? "par" : "impar"));
}
esParOImpar();
