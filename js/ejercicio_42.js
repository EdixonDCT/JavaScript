let pregunta = prompt(`Que desea cobrar Libro,Cuaderno o lapicero`).toLocaleLowerCase();
let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar del mismo"))
let compra;
if (pregunta == "libro") compra = 10000*cantidad;
else if (pregunta == "cuaderno") compra = 7550*cantidad;
else if (pregunta == "lapicero") compra = 5550*cantidad;
else compra = "no existe en el sistema";
alert(`La compra de ${pregunta} es ${compra}$`)