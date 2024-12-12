let min = parseInt(prompt("Ingrese los minutos lleva en llamada"));
let valor = 355;
let costo = min*valor;
let iva = ((costo*20)/100)+costo;
alert(`El costo de la Llamada con iva es ${iva}`);
