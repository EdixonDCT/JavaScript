function inversoAditivo() {
    let longitud = parseInt(prompt("¿Cuántos números deseas ingresar en el arreglo?"));
    let arreglo = [];
    
    for (let i = 0; i < longitud; i++) {
        let numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
        arreglo.push(numero * -1);
    }

    alert("El inverso aditivo de los números es: " + arreglo);
}
inversoAditivo();
