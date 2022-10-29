// Variables para captar los datos del formulario

let nombreU = document.getElementById('inUno').value;
let apellidoU = document.getElementById('inDos').value;
let edadU = document.getElementById('inTres').value;
let direccionU = document.getElementById('inC').value;


// objeto Usuario
class Usuario{
    constructor(nombreU, apellidoU, edadU, direccionU){
        this.nombre = nombreU
        this.apellido = apellidoU
        this.edad = edadU
        this.direccion = direccionU
    }
}

let usuarios = new Usuario(nombreU, apellidoU, edadU, direccionU);
console.log(usuarios)

// Evento

let enviar = document.getElementById('enviar');