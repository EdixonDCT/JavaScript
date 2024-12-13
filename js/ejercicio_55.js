let membresia = prompt("Bienvenido ala tienda de helados\nPuede ingresar si tiene alguna Membersia? A B C").toLocaleLowerCase();
let precio = parseInt(prompt("Ingrese el precio de su helado"));
let msg = "";
let desc = 0;
if (membresia == "a")
    {
        msg = "Usted tiene Membresia A tiene 10%";
        desc = precio*0.1;
    } 
else if (membresia == "b")
    {
        msg = "Usted tiene Membresia A tiene 15%";
        desc = precio*0.15;
    } 
else if (membresia == "c")
    {
        msg = "Usted tiene Membresia A tiene 20%";
        desc = precio*0.20;
    }
precio = precio - desc;
alert(`Su helado tiene un precio ${precio}$ ${msg}`);

