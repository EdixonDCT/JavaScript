function generarPiramide() {
    let altura = parseInt(prompt("Ingresa la altura de la pirámide:"));
    let piramide = "";
    for (let i = 1; i <= altura; i++) {
        piramide += " ".repeat(altura - i) + "*".repeat(i * 2 - 1) + "\n";
    }
    alert(piramide);
}
generarPiramide();
