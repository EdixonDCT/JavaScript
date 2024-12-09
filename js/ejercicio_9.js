let edad = parseInt(prompt("Ingrese su edad para Jugar"));
if (edad > 4 && edad < 18) alert("Debe pagar 5$")
else if(edad >= 18) alert("Debe pagar 10$")
else if(edad >= 0) alert("Es gratis")
else alert("Dato no valido")