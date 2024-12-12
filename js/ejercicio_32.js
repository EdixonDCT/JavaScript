let precio = 0
let precios = [];
let total = 0
for (let i = 1; i <= 5; i++) {
    precio = parseInt(prompt(`Ingrese el precio del Producto Numero ${i}`));
    if (i <= 2) precio = precio-(precio*0.05);
    else if (i <= 5 && i >= 4) precio = precio-(precio*0.02);
    precios.push(precio);
    total = total + precio;
}
alert(`Los precios de los productos son los siguientes ${precios} y el total es ${total}`);