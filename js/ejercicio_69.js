let alt = parseInt(prompt("Ingrese un numero para el Triangulo"));
let trian = "";
for (let i = 1; i <= alt; i++) {
    trian += "*".repeat(i) + "\n";
}
alert(trian);