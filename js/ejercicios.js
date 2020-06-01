
//EJERCICIO 1
alert("Un mensaje");

//EJERCICIO 2
document.write("<br> Hello World");

//EJERCICIO 3
document.write("<br> El resultado de 3+5 es:" + (3 + 5));

//EJERCICIO 4
let usrname = prompt("Ingrese un nombre de usuario");
document.write("<br> Hola " + usrname);

//EJERCICIO 5
let num1 = parseInt(prompt("Ingrese el primer numero a sumar"));
let num2 = parseInt(prompt("Ingrese el segundo numero a sumar"));
document.write("<br> La suma de estos numeros es " + (num1 + num2));

//EJERCICIO 6
let numero1 = prompt("Ingrese el primer numero a comparar");
let numero2 = prompt("Ingrese el segundo numero a comparar");
if (parseInt(numero1) > parseInt(numero2)) {
    document.write("<br> El numero 1 es mayor al numero 2");
}
else if (parseInt(numero1) == parseInt(numero2)) {
    document.write("<br> El numero 1 es igual al numero 2");
}
else {
    document.write("<br> El numero 1 es menor al numero 2");
}

//EJERCICIO 7
let comp1 = parseInt(prompt("Ingrese el primer numero a comparar"));
let comp2 = parseInt(prompt("Ingrese el segundo numero a comparar"));
let comp3 = parseInt(prompt("Ingrese el tercer numero a comparar"));

if ((comp1) > (comp2) && (comp1) > (comp3)) {
    document.write("<br> El numero mayor es " + (comp1));
}
else if ((comp1) < (comp2) && (comp2) > (comp3)) {
    document.write("<br> El numero mayor es " + (comp2));
}
else {
    document.write("<br> El numero mayor es " + (comp3));
}

//EJERCICIO 8
let divis1 = parseInt(prompt("Ingrese un numero para saber si es divisible en 2"));
if (((divis1) % 2) == (0)) {
    document.write("<br> El numero es divisible en 2");
}
else {
    document.write("<br> El numero no es divisible en 2 <br>");
}


//EJERCICIO 9
let frase1 = prompt("Ingrese una frase");
let vowel_list = "aeiouAEIOU";
let vowel_counter = 1

for (let i = 0; i < frase1.length; i++) {
    for (let vowel = 0; vowel < vowel_list.length; vowel++) {
        if (frase1.substring(i, i + 1) == vowel_list.substring(vowel, vowel+1)) {
            document.write("Vocal numero " + vowel_counter + " encontrada es " + frase1.substring(i, i+1) + "<br>")
            vowel_counter++
        }
    }
}

//EJERCICIO 9.2


//EJERCICIO 10
let divis1 = parseInt(prompt("Ingrese el numero a analizar sobre si es divisible por 2, 3, 5 o 7"));

if (divis1 % 2 == 0){
    document.write("El numero es divisible en 2")
    exit
}
else if(divis1 % 3 == 0){
    document.write("El numero es divisible en 3")
    exit
}
else if(divis1 % 5 == 0){
    document.write("El numero es divisible en 5")
    exit
}
else if(divis1 % 7 == 0){
    document.write("El numero es divisible en 7")
    exit
}
else{
    document.write("El numero no es divisible en las opciones presentadas")
}

//EJERCICIO 11

let divis2 = parseInt(prompt("Ingrese el numero a analizar sobre si es divisible por 2, 3, 5 o 7"));

if (divis2 % 2 == 0){
    document.write("El numero es divisible en 2 <br>")
}

if(divis2 % 3 == 0){
    document.write("El numero es divisible en 3 <br>")
}

if(divis2 % 5 == 0){
    document.write("El numero es divisible en 5 <br>")
}

if(divis2 % 7 == 0){
    document.write("El numero es divisible en 7 <br>")
}

if((divis2 %2 !==0) && (divis2 %3 !==0) && (divis2 %5 !==0) && (divis2 %7 !==0)){
    document.write("El numero no es divisible en las opciones presentadas")
}

