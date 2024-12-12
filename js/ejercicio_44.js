const euro = 1;
const pesoE = 4500;
const dolar = 1;
const pesoD = 4300;
let pregunta = prompt(`Desea pasar pesos a dolares o pesos a euros(escriba dolar/euro)`).toLocaleLowerCase();
let dato = parseInt(prompt("Ingrese la cantidad de pesos"))
let respuesta;
if (pregunta == "dolar") respuesta = (dato * dolar) / pesoD;
else if (pregunta == "euro") respuesta = (dato * euro) / pesoE;
else respuesta = "Dato no valido";
alert(`El cambio es ${respuesta}$ de ${pregunta}`);