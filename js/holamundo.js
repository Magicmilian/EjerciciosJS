// Este mensaje se muestra en la consola del navegador
console.log("Hola mundo!");

//Este mensaje es una ventana emergente
alert("Hola mundo de usuarios");

//Este mensaje se imprime dentro del HTML de mi sitio
document.write("Hola mundo de usuarios, esto esta escrito sobre el documento.");

//Declaracion de variables: let - var - const
let nombre = "Maximiliano";

document.write("<br> Hola " + nombre);

var edad = 32;
let age = 29;

document.write("<br> Variables var y let");
document.write("<br> Edad = "+ edad);
document.write("<br> Age = "+ age);

edad = 25;
age = 30;

document.write("<br> Modificamos el valor de las variables");
document.write("<br> Edad = "+ edad);
document.write("<br> Age = "+ age);

const url = "https://google.com";
document.write("<br> URL =" + url)

//Operador unitario
let contador = 1;
document.write("<br> Contador = " + contador);
contador++;
document.write("<br> Contador = " + contador);