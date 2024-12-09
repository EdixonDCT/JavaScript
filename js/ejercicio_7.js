let renta = parseInt(prompt("Cual es su renta anual?"));
let porc = 0
if(renta >= 10000 && renta < 20000) porc = 5;
else if(renta >= 20000 && renta < 35000) porc = 10;
else if(renta >= 35000 && renta < 60000) porc = 20;
else if(renta >= 60000) porc = 45;

porc == 0 ? alert(`Usted debe pagar ${renta} sin costos adicionales`) : alert(`Debe pagar ${(renta * porc / 100)+renta} total con el costo adicional ya aplicado de ${porc}%`);
