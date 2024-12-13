var contra = prompt("Ingrese una  contraseña");
cont = 1;
while (cont == 1)
{
let contraValidacion = prompt("Ingrese la contraseña nuevamente");
if(contra === contraValidacion)
{
    alert("Contraseña ingresada con exito");
    cont+=1;
}
else alert("Incorrecto");
}