let miNumero="20";

/*
console.log(miNumero);
console.log(typeof miNumero);
*/

let edad = Number(miNumero);
console.log(typeof edad);

if( edad >= 18){
    console.log("Puede Votar");
}
else{
    console.log("No Puede Votar");
}

let resultado = ( edad >= 18 ) ? "Puede Votar" : "No Puede Votar";
console.log(resultado);