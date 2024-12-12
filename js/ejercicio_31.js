let x1 = parseFloat(prompt("Introduce la coordenada x1 del primer punto:"));
let y1 = parseFloat(prompt("Introduce la coordenada y1 del primer punto:"));
let x2 = parseFloat(prompt("Introduce la coordenada x2 del segundo punto:"));
let y2 = parseFloat(prompt("Introduce la coordenada y2 del segundo punto:"));

let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//Nota el sqrt es para raiz cuadrara y pow para el cuadrado
alert("La distancia entre los puntos es: " + distancia);
