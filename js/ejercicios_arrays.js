// //EJERCICIO 1

// let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

// //IMPRIMIR EL ARRAY

// for(i=0; i < meses.length; i++){
//     document.write(meses[i] + "<br>")
// }

//EJERCICIO 2

// let ciudades = [];

// do {
//     let entrada = (prompt("Ingrese nombre de una ciudad o el numero cero para salir"));
//     if (entrada == "0") {
//         break
//     }
//     else {
//         ciudades.push(entrada);
//     }
// } while (confirm('¿Desea continuar?'))

// document.write("El arreglo generado es el siguiente: <br>")

// for (i = 0; i < ciudades.length; i++) {
//     document.write(ciudades[i] + "<br>")
// }

// document.write("La longitud del arreglo es " + ciudades.length + "<br>")

// document.write("El item de la posicion 1 es " + ciudades[1] + "<br>")
// document.write("El item de la posicion 3 es " + ciudades[3] + "<br>")
// document.write("El item de la ultima posicion es " + ciudades[ciudades.length - 1] + "<br>")
// ciudades.push("Paris")
// document.write("El item de la posicion 2 es " + ciudades[2] + "<br>")
// document.write("Ahora reemplazamos el item de la segunda posicion por 'Barcelona' <br>")
// ciudades[2] = "Barcelona"
// for (i = 0; i < ciudades.length; i++) {
//     document.write(ciudades[i] + "<br>")
// }

//EJERCICIO 3

// //LANZAMIENTO DE DOS DADOS 50 VECES
// let frecSumaDados = [0,0,0,0,0,0,0,0,0,0,0,0,0]

// for(i=0; i < 50; i++){
// dado1 = Math.floor(Math.random() * (6)) + 1;
// dado2 = Math.floor(Math.random() * (6)) + 1;
// sumaDeDados = dado1 + dado2
// frecSumaDados[sumaDeDados] = frecSumaDados[sumaDeDados] + 1
// document.write("La suma numero " + (i+1) + " dio " + sumaDeDados + "<br>")
// }

// for(a=0; a < frecSumaDados.length; a++){
//         document.write("El resultado " + a + " se repitio un total de " + frecSumaDados[a] + " veces. <br>")
//     }
