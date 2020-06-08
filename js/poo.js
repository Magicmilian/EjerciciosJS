//CREAR OBJETO
let goku = {
    nombre: "Kakaroto",
    edad: 48,
    raza: "Saiyan",
    transformacion: true
}


//MOSTRAR OBJETO
// document.write(`El nombre del personaje es: ${goku.nombre}`)

//AGREGAR PROPIEDADES
goku.poder = 100

//MOSTRAR TODAS LAS PROPIEDADES
// let llaves = Object.keys(goku)
// for (let i = 0; i < llaves.length; i++) {
//     let clave = llaves[i]
//     document.write(`<br> Objeto ${clave}: ${goku[clave]}`)
// }

//OBJETOS DE CLASES - PLANTILLAS
class Personajes {
    constructor(nombre, edad, raza, transformacion, poder) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.transformacion = transformacion;
        this.poder = poder;
        this.estado = true; //EL VALOR REPRESENTA SI EL PERSONAJE ESTA VIVO - TRUE=VIVO
        this.plotArmor = false; //EL VALOR FALSO INDICA QUE SE PUEDE MORIR
    }

    mostrarInfo() {
        document.write(`<br><h2>Personaje: ${this.nombre}</h2><br>
        Edad: ${this.edad}<br>
        Raza: ${this.raza}<br>
        Poder: ${this.poder}<br>
        Estado: ${this.estado}<br>`)
    }

    powerDown(golpe){
        this.poder = this.poder - golpe
    }

    //METODOS SET Y GET
    get mostrarNombre(){
        return this.nombre
    }

    set modificarNombre(nombreNuevo){
        this.nombre = nombreNuevo
    }
}

//CREANDO UN OBJETO A PARTIR DE UNA CLASE - INSTANCIAR
let vegeta = new Personajes("Vegeta", 50, "Saiyan", true, 99)
let gohan = new Personajes("Gohan", 30, "Half-Saiyan", true, 80)
let bills = new Personajes("Bills", "Unknokwn", "God", false, "Unknown")

//COMPROBANDO
// document.write("<br>" + vegeta.nombre)
// document.write("<br>" + gohan.nombre)
// document.write("<br>" + bills.edad)

// bills.mostrarInfo()
// gohan.mostrarInfo()

//UTILIZAR METODO GET Y SET
document.write("<br>El nombre es: " + vegeta.mostrarNombre)
gohan.modificarNombre = "Son Gohan"
document.write("<br>El nombre es: " + gohan.mostrarNombre)