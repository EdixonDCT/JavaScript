let trab = prompt("Ingrese el tipo de empleado Administrador o Empleado de Planta Admin/Emplant")
let prec = parseInt(prompt("Ingrese el costo del pedido de la mesa"));
if (prec >= 130000)
{
    prec = prec-((prec*15)/100)
    alert(`El costo de la mesa con un 15% es de ${prec}`);
}
else alert(`El costo de la mesa es ${prec}`);