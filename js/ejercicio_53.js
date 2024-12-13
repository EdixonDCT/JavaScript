let ivaPorcentaje = 0.21;

let precio1 = parseInt(prompt("Ingresa el precio del primer producto:"));
let precio2 = parseInt(prompt("Ingresa el precio del segundo producto:"));
let precio3 = parseInt(prompt("Ingresa el precio del tercer producto:"));
let precio4 = parseInt(prompt("Ingresa el precio del cuarto producto:"));
let precio5 = parseInt(prompt("Ingresa el precio del quinto producto:"));

let subtotal = precio1 + precio2 + precio3 + precio4 + precio5;
let iva = subtotal * ivaPorcentaje;
let total = subtotal + iva;

alert(`Subtotal: $${subtotal}\nIVA (21%): $${iva}\nTotal de la compra: $${total}`);
