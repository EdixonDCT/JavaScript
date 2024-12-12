let rad = parseInt(prompt("Ingrese el radio del cilindro"));
let alt = parseInt(prompt("Ingrese la altura del cilindro"));
const pi = 3.14;
let vol = pi*(rad*rad)*alt;
let area = (2*pi*rad*alt) + (2*pi*(rad*rad));
alert(`El volumen del cilindro es ${vol} y el radio es ${area}`);