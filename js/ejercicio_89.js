function numeroAleatorioParOImpar() {
    let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let numero = arreglo[parseInt(Math.random() * arreglo.length)];
    let esPar = numero % 2 === 0;
    alert(`El número aleatorio es: ${numero}. Es ${esPar ? "par" : "impar"}.`);
}
numeroAleatorioParOImpar();
