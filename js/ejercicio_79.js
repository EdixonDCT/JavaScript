function contarSilabas() {
    let palabra = prompt("Ingresa una palabra:");
    const silabas = palabra.match(/[aeiouAEIOU]+/gi);
    alert("La palabra tiene " + (silabas ? silabas.length : 0) + " sílabas.");
}
contarSilabas();
