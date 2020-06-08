class Persona {
    constructor(nombre, apellido, dni, email, telefono) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.email = email
        this.telefono = telefono
    }

    mostrarDatos() {
        document.write(`<br><h5>Persona</h5><br>
        Apellido y nombre: ${this.apellido}, ${this.nombre}
        <br>DNI: ${this.dni}
        <br>Email: ${this.email}
        <br>Telefono: ${this.telefono}
        <br>`)
    }

}

class Alumno extends Persona {
    constructor(nombre, apellido, dni, email, telefono, legajo, curso) {
        super(nombre, apellido, dni, email, telefono)
        this.legajo = legajo
        this.curso = curso
        this.estado = true
    }

    mostrarDatos() {
        document.write(`<br><h5>Alumno</h5><br>
        Apellido y nombre: ${this.apellido}, ${this.nombre}
        <br>DNI: ${this.dni}
        <br>Email: ${this.email}
        <br>Telefono: ${this.telefono}
        <br>Legajo: ${this.legajo}
        <br>Curso: ${this.curso}
        <br>Estado: ${this.estado}
        <br>`)
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, dni, email, telefono, legajo, antiguedad) {
        super(nombre, apellido, dni, email, telefono)
        this.legajo = legajo
        this.antiguedad = antiguedad
        this.estado = true
    }

    mostrarDatos() {
        document.write(`<br><h5>Empleado</h5><br>
        Apellido y nombre: ${this.apellido}, ${this.nombre}
        <br>DNI: ${this.dni}
        <br>Email: ${this.email}
        <br>Telefono: ${this.telefono}
        <br>Legajo: ${this.legajo}
        <br>Antiguedad: ${this.antiguedad}
        <br>Estado: ${this.estado}
        <br>`)
    }
}


class Profesor extends Persona {
    constructor(nombre, apellido, dni, email, telefono, materia, comision) {
        super(nombre, apellido, dni, email, telefono)
        this.materia = materia
        this.comision = comision
        this.estado = true
    }
    mostrarDatos() {
    document.write(`<br><h5>Profesor</h5><br>
    Apellido y nombre: ${this.apellido}, ${this.nombre}
    <br>DNI: ${this.dni}
    <br>Email: ${this.email}
    <br>Telefono: ${this.telefono}
    <br>Materia: ${this.legajo}
    <br>Comision: ${this.curso}
    <br>Estado: ${this.estado}
    <br>`)
    }
}

//CREAR CLASE PROFESOR Y CLASE EMPLEADO - HACER PRACTICO DE OBJETOS

let jonardo = new Persona("Jonardo", "Plotzien", "17456258", null, "4342165");
jonardo.mostrarDatos();
let jony = new Alumno("Jony", "Plotzien", "39624799", "jonyplod@gmail.com", "4342165", 105, "Full Stack 1-A");
jony.mostrarDatos();
let emilse = new Profesor("Emilse", "Arias", "78941651","emiarias@gmail.com","4343456","Full Stack","1-A");
emilse.mostrarDatos();
let empleadito = new Empleado("Random","Empleadin","49618596","empladin@gmail.com","4343125","411055","3 años")
empleadito.mostrarDatos()