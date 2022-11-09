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
    const parrafo = document.querySelector('.parrafoDiv2');
    parrafo.innerHTML = 'Hemos recibido tus datos. Pronto nos contactaremos contigo';
    
})