let hijos = parseInt(prompt("Ingrese la cantidad de hijos que desea calcular cuando los tuvo"));
const edades = [];
let edad = parseInt(prompt("Ingrese la edad actual de la Mamá"));
for (let i = 1; i <= hijos; i++) {
    let edadhijo = parseInt(prompt("Ingrese la edad del hijo"));
    let calculo = edad - edadhijo;
    edades.push(calculo); 
}
alert(`La edad cuando tuvo ${hijos} hijo/s es ${edades}`);