///Declaracion de variables

let planes = ['4 Mb $1900', ' 6 Mb $2300', ' 8 Mb $2700'];
let instalacion = 'El precio de la instalación del servicio es de $3500';
let afirmo1 = document.getElementById('uno');   
let niego1 = document.getElementById('dos');
let afirmo2 = document.getElementById('tres');   
let niego2 = document.getElementById('cuatro');

//////
let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
let edad = prompt('ingrese su edad');
let direccion = prompt ('Ingrese su direccion');

///Información del servicio 

afirmo1.addEventListener('click', informacion);
niego1.addEventListener('click', noInfo);

function informacion(){
    if (afirmo1 != 0){
        alert(instalacion);
        alert(planes);
    }
}

function noInfo(){
    if(niego1 != 0){
        alert('Muchas gracias por su visita.');
    }
}

///Datos de usuario

afirmo2.addEventListener('click', datos3);
niego2.addEventListener('click', noDatos);

function datos3(){
    alert('Sus datos son los siguientes: '.concat('\nNombre: ',nombre, '\nApellido:  ', apellido,'\nEdad: ', edad, '\nDirección: ', direccion));
    let confirmar = prompt('Si sus datos son correctos ingrese "y", de lo contrario "n"')
    if (confirmar == 'y'){
        alert('Gracias por completar la encuesta. Pronto nos contactaremos contigo');
    } else if (confirmar == 'n'){
        alert('Por favor vuelva a ingresar sus datos.');
    } else{
        alert('Debe ingresar "y" o "n"');
    }
}

function noDatos(){
    if (niego2 != 0){
        alert('Esperamos verte pronto')
    }
}


///Objeto

class usuario{
    constructor(nombreU, apellidoU, edadU, direccionU){
        this.nombre = nombreU;
        this.apellido = apellidoU;
        this.edad = edadU;
        this.direccion = direccionU;
        function verUsuario (){
            alert('Nombre: ' + nombreU.concat(
                '\nApellido: ', apellidoU,
                '\nEdad: ', edadU, ' años',
                '\nDirección: ', direccionU
            )
            );
            return 'Usuario creado exitosamente!'
        }
        alert(verUsuario())
    }
}

let usuarioN = new usuario(nombre, apellido, edad, direccion);
console.log(usuarioN);