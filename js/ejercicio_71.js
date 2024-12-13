let number = parseInt(prompt("Ingrese un número entero para verificar si es primo:"));
let isPrime = true;
if (number < 2) {
    isPrime = false;
} else if (number % 2 === 0 && number > 2) {
    isPrime = false;
}
alert(isPrime ? `${number} es un número primo.` : `${number} no es un número primo.`);