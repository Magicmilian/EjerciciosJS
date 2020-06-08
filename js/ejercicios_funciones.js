//EJERCICIO 1

// function identifPares(numero) {
//     if ((numero % 2) == 0) {
//         document.write("El numero ingresado es par")
//         return
//     }
//     else {
//         document.write("El numero ingresado es impar")
//         return
//     }
// }


// let entrada = parseInt(prompt("Ingresar un numero"))
// identifPares(entrada);

//EJERCICIO 2

// //FUNCION QUE ANALIZA LA COMPOSICION DE LAS LETRAS Y CARACTERES DE UN TEXTO

// function analisisCadena(stringObj) {
//     let contadorMin = 0
//     let contadorMax = 0
//     for (i = 0; i < stringObj.length; i++) {
//         caracter = stringObj.substr(i, 1)
//         if (caracter == " " || !isNaN(caracter)) {
//             continue
//         }
//         else if (caracter == caracter.toUpperCase()) {
//             contadorMax = contadorMax + 1
//         }
//         else {
//             contadorMin = contadorMin + 1
//         }
//     }
//     if (contadorMax == 0) {
//         document.write("Todas las letras son minusculas")
//     }
//     else if (contadorMin == 0) {
//         document.write("Todas las letras son mayusculas")
//     }
//     else {
//         document.write("Existen tanto letras mayusculas como minusculas en la cadena de texto ingresada")
//     }
//     return
// }

// let entrada = prompt("Ingresar una cadena de texto")
// analisisCadena(entrada)

//EJERCICIO 3

function perimetro(ancho,altura){
    let resultado = 2*(altura + ancho)
    document.write("El perimetro es " + resultado +"<br>")
    return
}

let ancho = parseInt(prompt("Ingrese el ancho del rectangulo"));
let altura = parseInt(prompt("Ingrese la altura del rectangulo"));
perimetro(ancho,altura)

//EJERCICIO 4

function tablamulti(numerotabla){
    for(i=1; i<11; i++){
    document.write(numerotabla +" x " + i + " = " + (numerotabla*i) + "<br>")
    }
    return
}

let numeroingresado = parseInt(prompt("Ingrese un numero"));
tablamulti(numeroingresado)
