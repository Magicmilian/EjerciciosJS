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