const tituloprincipal = document.getElementById('titulo-principal')
function cambiarcolortitulo(){
    const coloractual =tituloprincipal.style.color;

    if (coloractual === 'rgb(0, 128, 0)'){
        tituloprincipal.style.color = '#ff1e00';
    } else{
        tituloprincipal.style.color = '#008000';
    }
}
tituloprincipal.addEventListener('click', cambiarcolortitulo)
console.log('script JavaScript cargado correctamente.');

const nombreclub = "Atletico Nacional";
let aniofundacion = 1947;
let escampeonactual = true
let tituloscopalibertadores;
tituloscopalibertadores = 2;
console.log("nombre del club", nombreclub);
console.log("año de fundacion", aniofundacion);
console.log("¿es campeon actual?", escampeonactual);
console.log("titulos de copa libertadores", tituloscopalibertadores);
aniofundacion = 1948;
console.log("año de fundacion actualizado", aniofundacion);

let a = 10;
let b = 5;
let suma = a + b;
let resta = a - b;
console.log("suma", suma, "resta", resta);

let edad = 30;
let esadulto = edad >=18;
let soniguales = (5 == '5');
let sonestrictamenteiguales = (5 ==='5');
console.log(" es adulto", esadulto);
console.log("5 == '5':", soniguales);
console.log("5 === '5':", sonestrictamenteiguales);