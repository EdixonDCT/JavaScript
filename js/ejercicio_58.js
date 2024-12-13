let mes = prompt("Ingresa el nombre del mes").toLowerCase();

let signo = "";

if (mes === "enero") {
  signo = "Capricornio";
} else if (mes === "febrero") {
  signo = "Acuario";
} else if (mes === "marzo") {
  signo = "Piscis";
} else if (mes === "abril") {
  signo = "Aries";
} else if (mes === "mayo") {
  signo = "Tauro";
} else if (mes === "junio") {
  signo = "Géminis";
} else if (mes === "julio") {
  signo = "Cáncer";
} else if (mes === "agosto") {
  signo = "Leo";
} else if (mes === "septiembre") {
  signo = "Virgo";
} else if (mes === "octubre") {
  signo = "Libra";
} else if (mes === "noviembre") {
  signo = "Escorpio";
} else if (mes === "diciembre") {
  signo = "Sagitario";
} else {
  signo = "Mes no válido. Por favor, ingresa un mes correcto.";
}

alert(`El signo zodiacal correspondiente al mes de ${mes} es: ${signo}`);
