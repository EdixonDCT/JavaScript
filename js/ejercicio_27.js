let notas = 0;
let parc = 0
for (let i = 1; i < 4; i++)
{
notas = parseInt(prompt(`Ingrese la notas del Pacial ${i}`));
parc = parc + notas;
}
parc = parc / 3
exam = parseInt(prompt(`Ingrese la calificacion del examen final`));
trab = parseInt(prompt(`Ingrese la calificacion del trabajo final`));
parc = (parc*55)/100;
exam = (exam*30)/100;
trab = (trab*15)/100;

let final = parc+exam+trab;

alert(`La nota final es ${final}`);