function sumarPositivos() {
    let longitud = parseInt(prompt("¿Cuántos números deseas ingresar en el arreglo?"));
    let arreglo = [];
    let contadorNegativos = 0;

    for (let i = 0; i < longitud; i++) {
        let numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
        arreglo.push(numero);
        if (numero < 0) {
            contadorNegativos++;
        }
    }

    if (contadorNegativos > 0) {
        alert("La suma es 0.");
    } else {
        let sumaPositivos = arreglo.reduce((acc, n) => acc + n); //nota suma todo lo del array
        alert(sumaPositivos);
    }
}
sumarPositivos();
