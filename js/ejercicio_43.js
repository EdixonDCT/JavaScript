let texto = prompt("Ingresa una cadena con comillas dobles (pueden ser escapadas):");
let regex = /"([^"\\]|\\.)*"/;

let resultado = texto.match(regex);

if (resultado) {
  alert(`Cadena con comillas: ${resultado}`);
} else {
  alert("No se encontró una cadena con comillas dobles.");
}
