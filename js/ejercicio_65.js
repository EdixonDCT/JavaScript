let num = parseInt(prompt("Ingrese un número entero positivo para la cuenta atrás:"));
let cuentaAtras = [];
for (let i = num; i >= 0; i--) {
    cuentaAtras.push(i);
}
alert(`Cuenta atrás: ${cuentaAtras}`);
