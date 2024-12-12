let V = parseFloat(prompt("Introduce el volumen (V) en metros cúbicos:"));
let t = parseFloat(prompt("Introduce el tiempo (t) en segundos:"));
let radio = parseFloat(prompt("Introduce el radio (r) del depósito en metros:"));
let altura = parseFloat(prompt("Introduce la altura (H) del depósito en metros:"));

let Q = V / t;
let volumen = Math.PI * Math.pow(radio, 2) * altura;

alert(`El caudal es ${Q}`);
alert(`El volumen del deposito es ${volumen}`);
