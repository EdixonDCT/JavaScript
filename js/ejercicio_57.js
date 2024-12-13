let calificacion = parseFloat(prompt("Ingresa la calificación del estudiante: (1.0 al 10)"));

let resultado = "";

if (calificacion >= 9.1 && calificacion <= 10) {
  resultado = "A: Excelente";
} else if (calificacion >= 8.1 && calificacion < 9) {
  resultado = "A: Muy bien";
} else if (calificacion >= 7.5 && calificacion < 8) {
  resultado = "A: Bien";
} else if (calificacion < 7.5) {
  resultado = "NA: No Aprobado";
} else {
  resultado = "Calificación fuera de rango.";
}

alert(resultado);
