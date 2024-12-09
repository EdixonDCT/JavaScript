let edad = parseInt(prompt("Ingrese su edad"));
if (edad >= 18)
{
    alert("Es mayor de edad");
}
else if(edad < 18)
{
    alert("Es menor de edad");
}
else if(edad <= 0)
{
    alert("Ingrese una edad valida");
}
else
{
    alert("Ingrese un tipo de dato valido");
}