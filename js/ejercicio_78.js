function esPalabraCortaOLarga() {
    let palabra = prompt("Ingresa una palabra:");
    alert("La palabra es " + (palabra.length < 5 ? "corta" : "larga"));
}
esPalabraCortaOLarga();
