// Variables
let usuarios = [];

const nombre = document.getElementById('inU');
const apellido = document.getElementById('inD');
const edad = document.getElementById('inT');
const direccion = document.getElementById('inC');
const clasificar = document.getElementById('megas');




// Evento
let enviar = document.getElementById('enviar');
let boton = document.getElementById('generar');

enviar.addEventListener('click', (e)=>{
    e.preventDefault();
    let persona = new Usuario(inU.value,inD.value,parseInt(inT.value),inC.value,megas.value);
    usuarios.push(persona);
    console.log(usuarios);
})

generar.addEventListener('click', (e)=>
{
    e.preventDefault();
    usuarios = localStorage.setItem('cliente',(JSON.stringify(usuarios)));
    console.log(usuarios);
})