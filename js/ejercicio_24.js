let regex = /^[-+]?\d*\.?\d+(e[-+]?\d+)?$/;

let input = prompt("Ingresa un número en punto flotante (puede ser como 2.3, -3e2, 0.45, etc.):");

if (regex.test(input)) {
  alert(`El número "${input}" es un número válido en punto flotante.`);
} else {
  alert(`El número "${input}" NO es un número válido en punto flotante.`);
}
