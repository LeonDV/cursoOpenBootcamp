//-- Primera parte:
//-- Crear una función con tres parámetros que sean números que se suman entre sí.

function suma_caracteres(a, b, c) {
    let respuesta = a + b + c;
    console.log(respuesta);
}

//Llamar a la función en el main y darle valores.
suma_caracteres(10, 20, 30);


//Segunda parte:
//Crear una clase coche.

let coche = {};

//Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.

coche.num_puertas = 5;

/*
    opción:
    let coche = {
        num_puertas: 5
    }
*/

//Una función que incremente el número de puertas que tiene el coche.

function agregar_puerta(a) {
    coche.num_puertas = coche.num_puertas + a;

    console.log(coche.num_puertas);
}

//Crear un objeto miCoche en el main y añadirle una puerta.

agregar_puerta(1);

//Mostrar el número de puertas que tiene el objeto.
function agregar_puerta(a) {
    coche.num_puertas = coche.num_puertas + a;
    let respuesta = coche.num_puertas;

    //console.log(coche.num_puertas);
    return respuesta;
}

let puertas = agregar_puerta(1);
console.log(puertas);