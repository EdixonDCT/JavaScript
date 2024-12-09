let puntaje = parseFloat(prompt("Ingrese su puntaje"));
calculo = (puntaje / 0.2)*2400;
titulo = "Inaceptable";
if (puntaje >= 0.4 && puntaje < 0.6) titulo="Aceptable";
else if (puntaje >= 0.6 && puntaje < 1.0) titulo="Meteorito";
else if (puntaje >= 1.0 && puntaje < 2.0) titulo="Meteorito+";
else if (puntaje >= 2.0) titulo="Meteorito++";
alert(`Usted con un puntaje ${puntaje} es ${titulo} y posee un sueldo de ${calculo}`)