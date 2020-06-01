//BUCLES

//WHILE - MIENTRAS SE CUMPLA, EJECUTAR

// while(condicion){
//     Aqui va el codigo que quiero ejecutar
//     Al final uso incremental o alguna forma de salir del loop
// }

//DO WHILE - HACER, MIENTRAS SE CUMPLA LA CONDICION

// do {
//     Aqui va el codigo que quiero ejecutar
// } while (condicion)

//FOR

// for(inicializacion;condicion;incremental){
//     Aqui va el codigo que quiero ejecutar
// }

/*EJERCICIO 1*/
// let edad = prompt("Ingresa tu edad");
// verificar si el numero ingresado es valido
// if (!isNaN(edad)) {
//     if (edad >= 18) {
//         document.write("Puedes conducir");
//     } else {
//         document.write("Aun eres pequeño para conducir");
//     }
// } else {
//     alert("Introduce un numero válido");
// }

// /*EJERCICIO 2*/
// let nota = parseInt(prompt("Ingrese una nota del 0 al 10"));

// switch (nota) {
//     case 0:
//     case 1:
//     case 2:
//         alert("0-2: Muy deficiente");
//         break
//     case 3:
//     case 4:
//         alert("3-4: Insuficiente");
//         break
//     case 5:
//     case 6:
//         alert("5-6: Suficiente")
//         break
//     case 7:
//         alert("7: Bien")
//         break
//     case 8:
//     case 9:
//         alert("8-9: Notable")
//         break
//     case 10:
//         alert("10: Sobresaliente")
//         break
//     default:
//         document.write("<br>Introdujo una opcion no permitida. Intente nuevamente.")
// }


/*EJERCICIO 3*/

// let resultado = '';
// do {
//     let palabra = prompt('Ingresa una palabra');
//     if (resultado == '') {
//         //si es la primer palabra, concateno sin usar el guion
//         resultado = palabra;
//     } else {
//         resultado = resultado + '-' + palabra;
//     }
// }

// while (confirm('¿Desea continuar?')

// );

// document.write(resultado);

/*EJERCICIO 4*/

// let resultado = 0;
// do {
//     let numero = parseInt(prompt('Ingrese un numero'));
//     if (!isNaN(numero)) {
//         resultado=resultado+numero
//     }
//     else {
//         alert("Por favor, introduzca un numero valido")
//     }
// }

// while (confirm('¿Desea continuar?')

// );

// document.write(resultado);

/*EJERCICIO 5*/

// let resto = 0;
// let letra = "";
// do {
//     let numero = parseInt(prompt("Ingresa tu dni"));
//     if (!isNaN(numero) && numero !=null) {
//         if (numero >= 0 && numero <= 99999999) {
//             //obtener el resto de dividir el numero en 23
//             resto = numero % 23;
//             console.log(resto);
//             switch (resto) {
//                 case 0:
//                     letra = "T";
//                     break;
//                 case 1:
//                     letra = "R";
//                     break;
//                 case 2:
//                     letra = "W";
//                     break;
//                 case 3:
//                     letra = "A";
//                     break;
//                 case 4:
//                     letra = "G";
//                     break;
//                 case 5:
//                     letra = "M";
//                     break;
//                 case 6:
//                     letra = "Y";
//                     break;
//                 case 7:
//                     letra = "F";
//                     break;
//                 case 8:
//                     letra = "P";
//                     break;
//                 case 9:
//                     letra = "D";
//                     break;
//                 case 10:
//                     letra = "X";
//                     break;
//                 case 11:
//                     letra = "B";
//                     break;
//                 case 12:
//                     letra = "N";
//                     break;
//                 case 13:
//                     letra = "J";
//                     break;
//                 case 14:
//                     letra = "Z";
//                     break;
//                 case 15:
//                     letra = "S";
//                     break;
//                 case 16:
//                     letra = "Q";
//                     break;
//                 case 17:
//                     letra = "V";
//                     break;
//                 case 18:
//                     letra = "H";
//                     break;
//                 case 19:
//                     letra = "L";
//                     break;
//                 case 20:
//                     letra = "C";
//                     break;
//                 case 21:
//                     letra = "K";
//                     break;
//                 case 22:
//                     letra = "E";
//                     break;
//                 default:
//                     //si el numero no se encuentra entre 0 y 22
//                     alert("Numero erroneo");
//             }
//         }
//         alert("Numero: " + numero + ", Letra: " + letra);
//     }
//     else {
//         if (numero != null) {
//             alert("Ingreso un valor erroneo");
//         }
//     }
// } while (numero != null);

/*EJERCICIO 6*/

// for (let x = 0; x < 30; x++) {
//     for (let nveces = 0; nveces < x+1; nveces++) {
//         document.write(x + 1)
//     }
//     document.write("<br>")
// }

/*EJERCICIO 7*/

// let x = parseInt(prompt("Ingrese un numero entre 1 y 50"))

// if (x <= 50) {
//     for (x; x > 0; x--) {
//         for (let nveces = 0; nveces < x; nveces++) {
//             document.write(x)
//         }
//         document.write("<br>")
//     }
// }
// else {
//     alert("Introduzca un numero valido")
// }

/*EJERCICIO 8*/

// let numerodelineas = parseInt(prompt("Ingrese un numero entre 1 y 50"))


// for(let x=1; x<=numerodelineas;x++){
//     for(let iddelinea = 1; iddelinea<=x ; iddelinea++){
//         document.write(iddelinea + " ")
//     }
//     document.write("<br>")
// }

/*EJERCICIO 9*/

// document.write("<hr>");
// //crear variables
// let j = 500;
// let rep = 0;
// //bucle desde 1 hasta j=500
// for (let i = 1; i <= j; i++) {
//     document.write(i);
//     //si el resto de dividir i/4 es igual a 0
//     if (i % 4 == 0) {
//         document.write(" (Multiplo de 4)");
//     }
//     //si el resto de dividir i/9 es igual a 0
//     if (i % 9 == 0) {
//         document.write(" (Multiplo de 9)");
//     }
//     //agrego un salto de linea
//     document.write("<br>");
//     //si es multiplo de 5 imprimir linea
//     if (i % 5 == 0) {
//         document.write("<hr>");
//     }
// }

/*EJERCICIO 10*/

// let filas = parseInt(prompt("Ingrese un numero de filas"));
// let colum = parseInt(prompt("Ingrese un numero de columnas"));
// filas * columnas 
// let res = filas * colum;

// document.write("<table border>");
// bucle desde 0 hasta el numero de filas
// for (let i = 0; i < filas; i++) {
//     al principio de cada fila comenzar con un <tr>
//     document.write("<tr>");
//     bucle desde 0 hasta el numero de columnas
//     for (let j = 0; j < colum; j++) {
//         en cada columna agregar un <td> para comenzar una celda
//         document.write("<td>");
//         luego escribo el valor res
//         document.write(res);
//         decrementamos res
//         res--;
//         escribo la etiqueta de cierre de la celda </td>
//         document.write("</td>");
//     }
//     escribimos la etiqueta de cierre de la fila </tr>
//     document.write("</tr>");
// }
// al final cerramos la tabla </table>
// document.write("</table>");

/*EJERCICIO 11*/
// let nombre1 = prompt("Ingresar nombre de la primera persona")
// let edad1 = parseInt(prompt("Ingresar la edad de la primera persona"))
// let nombre2 = prompt("Ingresar nombre de la segunda persona")
// let edad2 = parseInt(prompt("Ingresar la edad de la segunda persona"))
// let nombre3 = prompt("Ingresar la tercera persona")
// let edad3 = parseInt(prompt("Ingresar nombre de la edad de la tercera persona"))

// document.write("La edad del mas grande es " + Math.max(edad1, edad2, edad3) + "<br>")

// if (Math.max(edad1, edad2, edad3) == edad1) {
//     document.write("El nombre del mayor es " + nombre1 + "<br>")
// }
// if (Math.max(edad1, edad2, edad3) == edad2) {
//     document.write("El nombre del mayor es " + nombre2 + "<br>")
// }
// if (Math.max(edad1, edad2, edad3) == edad3) {
//     document.write("El nombre del mayor es " + nombre3 + "<br>")
// }

// /*EJERCICIO 12*/
// numerorandom = Math.floor(Math.random()*99)+1;
// document.write("Su numero aleatorio es " + numerorandom)

// /*EJERCICIO 13*/
// let texto = prompt("Ingrese un texto")
// document.write(texto.toUpperCase())

/*EJERCICIO 14*/
// let texto = prompt("Ingrese un texto")

// //BUCLE DE CARACTERES HASTA EL PENULTIMO
// for (x = 0; x < texto.length - 1; x++) {
//     //IMPRIMIMOS HASTA EL PENULTIMO
//     document.write(texto.charAt(x) + "-")
// }
// let ultimaletra=texto.charAt(texto.length-1)
// document.write(ultimaletra)

/*EJERCICIO 15*/
// let cadena = prompt("Introduce una cadena de texto:");

// let numchar = cadena.length; //Devuelve la longitud del string.
// cadena = cadena.toUpperCase(); //Devuelve el string en mayúsculas.
// let car;
// let contador = 0;
// let i;
// //BUCLE DE CARACTERES
// for (i = 0; i < numchar; i++) {
//     car = cadena.charAt(i); //recupera el caracter i del string.
//     if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
//         contador++;
//     }
// }
// document.write("Número de Vocales: " + contador + ".");

/*EJERCICIO 16*/
// let cadena = prompt("Introduce un Texto:");
// let numchar = cadena.length;
// let j;
// let car;
// let salida = "";
// //BUCLE DE CARACTERES
// for (j = 0; j < numchar; j++) {
//     car = cadena.charAt(j); //recupera el caracter i del string.
//     salida = car + salida;
// }
// document.write(salida);

// /*EJERCICIO 17*/
// let cadena = prompt("Introduce un Texto:");
// cadena = cadena.toUpperCase();

// for (i = 0; i < cadena.length; i++) {
//     car = cadena.charAt(i)
//     if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
//         document.write("La posicion de la primera vocal es " + i)
//         exit
//     }
// }