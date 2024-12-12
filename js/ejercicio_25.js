let med = parseInt(prompt("Ingrese el valor de del medicamento"));
let preg = prompt("Quiere aplicar descuento?");
preg = preg.toLowerCase();
if (preg == "si") alert(`El precio es ${med-((med*10)/100)}`);
else if (preg == "no") alert(`El precio es ${med}`);
else alert(`valor invalido el precio es ${med}`);
