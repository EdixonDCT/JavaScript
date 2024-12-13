let cursos = parseInt(prompt("Ingrese cantidad de cursos"));
if (cursos < 6 && cursos > 0) alert(`El precio de los ${cursos} es de ${cursos*2000000}$`);
else if (cursos >= 6) alert(`El precio de los ${cursos} es de ${cursos*1200000}$`);
else alert(`DATO DE CURSO NO VALIDO`);
