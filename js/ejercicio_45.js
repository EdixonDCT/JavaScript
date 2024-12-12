let num = parseInt(prompt("Ingrese cualquier numero"));
if (num < 100 && num >= 0) alert("Es positivo y menor que 100");
else if (num == 100) alert("Es 100 y es positivo");
else if (num >= 100) alert("Es positivo y mayor de 100");
else if (num < 0) alert("Es negativo");
else alert("Valor invalido");