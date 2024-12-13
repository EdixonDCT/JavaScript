function sumaEnBinario() {
    let a = parseInt(prompt("Ingresa el primer número:"));
    let b = parseInt(prompt("Ingresa el segundo número:"));
    alert("La suma en binario es: " + (a + b).toString(2)); //nota el ToString(2) hace que se vuelva binario 0 1
}
sumaEnBinario();
