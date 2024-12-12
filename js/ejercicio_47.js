let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));

if (num1 === num2 && num1 === num3) {
    alert("Los tres números son iguales");
}
else if(num1 === num2 || num2 === num3 || num1 === num3)
    {
        alert("Dos de los tres numeros estan repetidos");
    }
else {
    let mayor = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);

    alert(`El mayor número es: ${mayor}`);
    alert(`El menor número es: ${menor}`);
}
