//EJEMPLO AND (&&)
let a=5;
let valMin=0, valMax=10;

if ( a>= valMin && a <=valMax){
    console.log("Dentro del Rango");    
}
else{
    console.log("Fuera del Rango");
}

//EJEMPLO OR (||) Retorna TRUE, si cualquier operador es TRUE
let vacaciones = false, diaDescanso = true;
if ( vacaciones || diaDescanso ){
    console.log("Puede ir al estadio");
}
else{
    console.log("Aun esta en el trabajo");
}