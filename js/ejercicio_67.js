let alt = parseInt(prompt("Ingrese la altura del triángulo rectángulo:"));
let tri = "";
for (let i = 1; i <= alt; i++) {
    tri += "*".repeat(i) + "\n";
}
alert(tri);
// el repeat funciona para que se repita por el numero de i todo