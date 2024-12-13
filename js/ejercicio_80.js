function tablaMultiplicar5() {
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
        if (i !== 5) {
            tabla.push(`5 * ${i} = ${5 * i}`);
        }
    }
    alert(tabla.join("\n"));
}
tablaMultiplicar5();