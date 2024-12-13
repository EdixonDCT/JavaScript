let tabla = "";
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        tabla += `${i} x ${j} = ${i * j}\n`;
    }
    alert(tabla);
    tabla=" ";
}