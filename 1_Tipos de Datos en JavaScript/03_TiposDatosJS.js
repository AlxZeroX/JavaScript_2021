/*
Tipos de datos en JS
*/

//Tipo de dato string
var nombre = "Luis";
console.log(nombre);

//Cambiando el tipo de dato
nombre = 10;
console.log(typeof nombre);

//Tipo de dato Numerico
var numero = 100;
console.log(numero);

//Tipo de dato Object
var objeto = {
    nombre: "Alex",
    Apellido: "Martinez",
    telefono: 89896161
}

console.log(objeto);

//Tipo de dato Boolean (TRUE, FALSE)
var bandera = false;
console.log(typeof bandera);

//Tipo de dato Funcion
function myfuncion(){}
console.log(typeof myfuncion);

//Tipo de dato Symbol
var simbolo = Symbol ("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una funcion
class Persona{
    constructor(nombre, Apellido){
        this.nombre=nombre;
        this.Apellido = Apellido;
    }
}

console.log(typeof Persona);

//Tipo de dato Undefined
var x;
console.log(typeof x);

//Null = Ausencia de valor
var y = null;
console.log(typeof y);

var autos = ['BMW', 'AUDI', 'VOLVO'];
console.log(autos);
console.log(typeof autos);

//Cadenas vacias
var z = '';
console.log(z);
console.log(typeof z);