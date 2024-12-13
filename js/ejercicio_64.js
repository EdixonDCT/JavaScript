let num = parseInt(prompt("Ingrese un número entero positivo:"));
let impares = [];
for (let i = 1; i <= num; i += 2) {
    impares.push(i);
}
alert(`Números impares: ${impares.join(";")}`);
//nota el join hace que cambie la , de siempre por la cosa que se ingrese