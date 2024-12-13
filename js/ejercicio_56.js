let saldo = parseInt(prompt("Ingresa el saldo actual"));
if (saldo < 100000 && saldo > 0)
{
    let interes = saldo*0.03;
    alert(`Usted posee un saldo de ${saldo}$ con un interes de ${interes}$`);
}
else if (saldo >= 100000)
{
        let interes = saldo*0.04;
        alert(`Usted posee un saldo de ${saldo}$ con un interes de ${interes}$`);
}
else if (saldo <= 0) alert("Valores menores a 0 no admitido");
else alert("DATO NO VALIDO");