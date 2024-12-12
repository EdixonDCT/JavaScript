let preg = prompt("Ingrese si desea calcular Area Triangulo o Circulo (T/C)").toLocaleLowerCase();
if (preg == "c"){
    let rad = parseInt(prompt("Ingrese el radio del circulo"));
    let circ = 3.14 *rad*rad;
    alert(`El area del circulo es ${circ}`);
}
else if (preg == "t")
    {
        let base = parseInt(prompt("Ingrese la base del triangulo"));
        let altura = parseInt(prompt("Ingrese la altura del triangulo"));
        let trian = base * altura / 2;
        alert(`El area del triangulo es ${trian}`);
    }
else alert("Dato no valido")