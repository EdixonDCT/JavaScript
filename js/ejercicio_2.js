let regex = /^[A-Za-z0-9)]+$/;
cont = 0;
while (cont == 0)
{
var contra = prompt("Ingrese una nueva contraseña \
(Solo valores Alfanumericos)");
if (regex.test(contra))
{
    alert("Contraseña Aprobada");
    cont+=1;
}
else
{
    alert("No cumple con los requirimientos pedidos repita la accion");
}
}

while (cont == 1)
{
let contraValidacion = prompt("Ingrese la contraseña nuevamente");
if(contra === contraValidacion){
    alert("Usuario registrado con exito");
    cont+=1;
}
else
{
    alert("Acceso denegado");
}
}