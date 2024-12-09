try{
var num1 = prompt("Ingrese el primer numero");
var num2 = prompt("Ingrese el segundo numero");
if (num2 == 0) 
{
    throw new Error("El divisor no puede ser 0");   
}
var division = num1 / num2;

alert(`La divison es: ${num1} / ${num2} = ${division}`);
}catch(error)
{alert(error.message)}