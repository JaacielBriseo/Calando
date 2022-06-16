console.log('Externo');
alert ('Bienvenido')

var español =8
var historia = 10
var geografia = 9

console.log (español)
console.log (historia)
console.log (geografia)

var promedio = (español + historia + geografia) / 3
console.log ('Promedio de materias: ' + promedio)

var nombre = 'Jaaciel';
var edad = 26;
const fechaNacJaaciel = '23/02/1996'

console.log(nombre);
console.log(edad);
console.log (nombre);

console.log(
    nombre + ' tiene ' + edad +  ' años' + ' porque nacio el ' + fechaNacJaaciel
)

// String (cadenas)=texto
var cadena = 'Cadena';
var cadena3 = 'Cadenas';
var cadena4;

console.log(cadena)
console.log(cadena3)
console.log(cadena4)

//Number
var numero = 1;
var Number = 0.01;
var numero3 = -0.01;
var numero4 = 1.5e+6;

console.log(numero)
console.log(Number)
console.log(numero3)
console.log(numero4)

var infinito = 12341234532/0;
var otro = 15 + + 'Cadena';

console.log(infinito)
console.log(otro)

//Ejercicio
var base = 15;
var altura = 20 ;

console.log ('Resultado: ' + base * altura /2)



// Comandos de control de flujo if ,else
var quincena = 950;

if (quincena >1000 ) {
    console.log ('Te fue bien');}
    else {
        console.log ('Te fue mal')
    }

var puntaje = 150;
/**
 *  puntaje = 10 => Logro I
 *  puntaje = 50 => Logro II
 * puntaje = 150 => Logro III
 */
if (puntaje < 10){
    console.log ('Echale más ganas !!');
} if (puntaje >= 10 ) {
    console.log ('Ganaste el logro I!!!');
} if (puntaje >= 50 ) {
    console.log ('Ganaste el logro II!!!');
} if (puntaje >= 150 ) {
    console.log ('Ganaste el logro III!!!');
}
// && => OPERADOR AND (todos deben estar correctos)
if (puntaje >= 10 && puntaje >= 50 && puntaje >= 150){
    console.log ('Felicidades , ganaste los 3 logros!!')
}
// || => OPERADOR OR (almenos uno debe estar correcto) 24:24
if (puntaje >= 10 || puntaje >= 50 || puntaje >= 150){
    console.log ('Tienes un logro, sigue asi!!!')
}
// Booleans (Letra Z es de mayor valor que A)
console.log ( 10<20)
console.log ( 10>20)
console.log ('A' > 'Z')
console.log ('A' < 'Z')

//Variables (Cualquier forma sirve)
let Arturo = 'El mejor';
console.log (Arturo)
var Isa = 'La mejor'
console.log (Isa)
const ale = 500
console.log (ale)

if (Isa < Arturo) {console.log ( 'eaea')
    
} else { console.log ('asdfasfdg')
    
}
//While (Me imprime los numeros del 1 al 10 )
let x= 1;
while ( x<11){
    console.log (x)
    x = x + 1;
}
let w = 2 ;
while ( w < 12){
    console.log (w)
    y = w++
}
// do y prompt
/*let tuNombre = 'Jaaciel';
do {prompt ('Quien eres?');

}while (tuNombre = Jaaciel );
console.log (tuNombre)*/


//For
for (let number = '#'; number <= '########'; number = number + '#') {
    console.log(number);
  }

let gato = ''
while ( gato != '########') {
    gato = gato + '#'
    console.log ( gato )
}