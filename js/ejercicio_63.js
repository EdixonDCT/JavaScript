let edad = parseInt(prompt("Ingrese su edad:"));
let añosCumplidos = "";
let cont = 1;
while (cont <= edad) {
    añosCumplidos += `${cont}\n`;
    cont++;
}
alert(`Has cumplido estos años:\n${añosCumplidos}`);
