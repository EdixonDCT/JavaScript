let num1 = parseInt(prompt("Ingresa el primer lado del rectangulo:"));
let num2 = parseInt(prompt("Ingresa el segundo lado del rectangulo:"));
if (num1 >= 1 && num2 >=1)
{
    let area = num1*num2;
    alert(`El area del rectangulo es ${area}`);
}
else alert(`Uno o Dos de los numeros no tienen el formato valido(nulo o negativo)`);
