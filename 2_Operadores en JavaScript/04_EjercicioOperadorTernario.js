let miNumero="19";

let edad = Number(miNumero);
console.log(edad);

if( isNaN(edad)){
    console.log("No es un numero");
}
else{
    if( edad >= 18){
        console.log("Puede Votar");
    }
    else{
        console.log("No Puede Votar");
    }
}

if( isNaN(edad)){
    console.log("No es un numero");
}
else{
    let resultado = ( edad >= 18 ) ? "Puede Votar" : "No Puede Votar";
    console.log(resultado);
}

