// Variables
let usuarios = [];

const nombre = document.getElementById('inU');
const apellido = document.getElementById('inD');
const edad = document.getElementById('inT');
const direccion = document.getElementById('inC');
const clasificar = document.getElementById('megas');




// Evento
let enviar = document.getElementById('enviar');

enviar.addEventListener('click', (e)=>
{
    e.preventDefault();
    let persona = new Usuario(inU.value,inD.value,parseInt(inT.value),inC.value,megas.value);
    usuarios.push(persona);
    console.log(usuarios);
    localStorage.setItem('cliente',(JSON.stringify(usuarios)));
    let descarga = JSON.parse(localStorage.getItem('cliente'));
    console.log(descarga);
    Swal.fire({
        title:`Muchas gracias ${usuarios[0].nombre}`,
        text:'Pronto nos contactaremos contigo.',
        icon: 'success',
        footer: 'SERVICIO DE INTERNET',
    })
})
