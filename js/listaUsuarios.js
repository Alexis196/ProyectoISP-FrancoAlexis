// Variables
let usuarios = [];

const nombre = document.getElementById('inU');
const apellido = document.getElementById('inD');
const edad = document.getElementById('inT');
const direccion = document.getElementById('inC');
const clasificar = document.getElementById('megas');




// Eventos
let enviar = document.getElementById('enviar');
let confirma = document.querySelector('.btnConfirma');

enviar.addEventListener('click', (e)=>
{
    e.preventDefault();
    let persona = new Usuario(inU.value,inD.value,parseInt(inT.value),inC.value,megas.value);
    usuarios.push(persona);
    localStorage.setItem('cliente',(JSON.stringify(usuarios)));
    let descarga = JSON.parse(localStorage.getItem('cliente'));
    console.log(descarga);
    if (boton2 != 0){
        let text = document.querySelector('.textoConfirma');
        text.innerHTML= `El costo de la instalación es de $3500. <br>
        El servicio solicitado (${descarga[0].megas}) lo pagarás del 01 al 10 del siguiente mes.`;
    }
})


confirma.addEventListener('click', (e)=>{
    e.preventDefault();
    Swal.fire({
        title: `Muchas Gracias ${usuarios[0].nombre}`,
        text: 'Pronto nos contactaremos contigo para coordinar día y hora de la instalación',
        icon: 'success',
        footer: 'SERVICIO DE INTERNET',
    })
})
