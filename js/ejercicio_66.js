let cantidad = parseFloat(prompt("Ingrese la cantidad a invertir:"));
let interes = parseFloat(prompt("Ingrese el interés anual (%):")) / 100; //el /100 hace que lo vuelva porcentaje de una vez
let años = parseInt(prompt("Ingrese el número de años de la inversión:"));

for (let i = 1; i <= años; i++) {
    cantidad += cantidad * interes;
    alert(`Año ${i}: Capital acumulado: ${cantidad.toFixed(2)}`);
}
//nota el tofixed es para los numeros con decimales para que los muestre como decimales