let dia = parseInt(prompt("Ingrese un numero: 1-Lunes 2-Martes 3-Miercoles 4-Jueves 5-Viernes 0-Sabado/Domingo"));

//ESTRUCTURA BASICA DE SWITCH
//switch(condicion logica){
//    case 1:
//        codigo a ejecutar si la condicion es igual a 1;
//        break;
//    case 2:
//        codigo
//        break;
//    default:
//        codigo;
//}

switch (dia) {
    case 1:
        document.write("El dia seleccionado es lunes")
        break
    case 2:
        document.write("El dia seleccionado es martes")
        break
    case 3:
        document.write("El dia seleccionado es miercoles")
        break
    case 4:
        document.write("El dia seleccionado es jueves")
        break
    case 5:
        document.write("El dia seleccionado es viernes")
        break
    case 0:
        document.write("El dia seleccionado es sabado/domingo")
        break
    default:
        document.write("Introdujo una opcion no permitida. Intente nuevamente.")
}