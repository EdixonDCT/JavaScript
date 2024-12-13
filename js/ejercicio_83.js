function validarPIN() {
    let pin = prompt("Ingresa un PIN de 4 o 6 caracteres numéricos:");
    alert("El PIN es " + (/^\d{4}$|^\d{6}$/.test(pin) ? "válido" : "inválido"));
}
validarPIN();
