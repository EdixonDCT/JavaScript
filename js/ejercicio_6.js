let nombre = prompt("Ingrese su nombre");
let genero = prompt("Ingrese su genero M/F");
nombre = nombre.toLowerCase();
genero = genero.toLowerCase();
if(nombre < "m" && genero == "f")
{
    alert("Usted pertenece al GRUPO A")
}
else if(nombre > "n" && genero == "m")
{
    alert("Usted pertenece al GRUPO B")
}
else{
    alert("No pertenece a ningun GRUPO")
}