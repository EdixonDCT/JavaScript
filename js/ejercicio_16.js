
let distancia = 2;
let time = 5;
alert(`Valor de velocidad de ${time}min y ${distancia}km toca pasarlos a m/s`);
distancia = distancia * 1000;
time = time *60;
alert(`${time}seg y ${distancia}m`);
let vel = distancia / time;
alert(`La velocidad es ${vel}`);
