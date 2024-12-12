let cont = 0;
let prom = 0;
while (cont < 4) {
exam = parseInt(prompt(`Ingrese la nota del examen(1-5)`));
if (exam >= 1 && exam <= 5)
{
   cont++;
   prom = prom + exam;
}
else if(exam < 0 || exam > 5) alert("Solo se aceptan valores 0-5");
else alert("DATO NO VALIDO");
}
prom = prom / 4;
alert(`El promedio es ${prom}`);