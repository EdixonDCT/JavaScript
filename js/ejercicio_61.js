let notas = [];
let notaAlta = 0;
let notaBaja = 0;
let contador100 = 0;
let contadorA = 0;
let contadorB = 0;
let contadorC = 0;
let contadorD = 0;
let contador = 0;

while (contador === 0) {
    let nota = parseInt(prompt("Ingrese una nota entre 1 y 100 (0 para finalizar):"));

    if (nota === 0) {
        contador++;
        break;
    }

    if (nota >= 1 && nota <= 100) {
        notas.push(nota);

        if (notaAlta === 0 || nota > notaAlta) {
            notaAlta = nota;
        }

        if (notaBaja === 0 || nota < notaBaja) {
            notaBaja = nota;
        }

        if (nota === 100) {
            contador100++;
        } else if (nota >= 90) {
            contadorA++;
        } else if (nota >= 80) {
            contadorB++;
        } else if (nota >= 70) {
            contadorC++;
        } else if (nota >= 60) {
            contadorD++;
        }
    } else {
        alert("Nota fuera de rango. Ingrese un valor entre 1 y 100.");
    }
}

if (notas.length > 0) {
    alert(`Nota más alta: ${notaAlta}\nNota más baja: ${notaBaja}\n100: ${contador100}\nA (90-99): ${contadorA}\nB (80-89): ${contadorB}\nC (70-79): ${contadorC}\nD (60-69): ${contadorD}`);
} else {
    alert("No se ingresaron notas válidas.");
}
