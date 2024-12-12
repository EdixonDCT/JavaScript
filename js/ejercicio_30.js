let password = prompt("Ingrese una contraseña:");

let regex = /^(?=[A-Za-z\d]{8,12}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

if (regex.test(password)) {
    alert("Contraseña válida.");
} else {
    alert("La contraseña no es válida. Debe tener entre 8 y 12 caracteres, contener al menos una letra mayúscula, una letra minúscula y un dígito.");
}
