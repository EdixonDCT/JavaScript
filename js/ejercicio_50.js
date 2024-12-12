let temp = parseInt(prompt("Ingrese la temperatura actual"));
let pres = parseInt(prompt("Ingrese la presion actual"));
if (temp < 100 && pres < 200) alert("Normal")
if (temp >= 100) alert("ALARMA TEMPERATURA ALTA")
if (pres >= 200) alert("ALARMA PRESION ALTA")