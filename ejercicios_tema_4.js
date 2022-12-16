/*
    En este ejercicio practicarás las estructuras de control, para ello deberás crear:

    Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
    Pista: Los números inferiores a 0 son negativos y los superiores, positivos.
*/

let numeroIf = 5;

if (numeroIf == 0) {
    console.log("La variable es cero");
} else if (numeroIf > 0) {
    console.log("La variable es positiva");
} else {
    console.log("La variable es negativa");
}

/*
    Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
        Incrementar el valor de la variable en uno cada vez que se ejecute.
        Mostrarlo por pantalla cada vez que se ejecute.
*/

let numeroWhile = 0;

while (numeroWhile < 3) {
    console.log(numeroWhile);
    numeroWhile++;
}

/*
    Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
*/

let numeroDoWhile = 2;
do {
    console.log(numeroDoWhile);
    numeroDoWhile++;
} while (numeroDoWhile < 3);

/*  
    Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3,
    se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
*/

for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
    console.log(numeroFor);
}

/*
    Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. 
    Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está.
    También habrá que poner un default para cuando el valor de la variable no sea una estación.
*/

const estacion = "verano";

switch (estacion) {
    case "verano":
        console.log("La estación es Verano");
        break;

    case "invierno":
        console.log("La estación es Invierno");
        break;

    case "primavera":
        console.log("La estación es Primavera");
        break;

    case "otoño":
        console.log("La estación es Otoño");
        break;

    default:
        console.log("No es una estación");
        break;
}