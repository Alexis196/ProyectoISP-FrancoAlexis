///Declaracion de variables

let boton1 = document.querySelector('#btn1')
let boton2 = document.querySelector('#btn2')


///Información del servicio 

boton1.addEventListener('click', ()=>{
    if (boton1 != 0){
        const parrafo = document.querySelector('.parrafoDiv');
        parrafo.innerHTML = 'El precio de la Instalación es de $3500'
    }
}
);
boton2.addEventListener('click', ()=>{
    if (boton2 != 0){
        const parrafo = document.querySelector('.parrafoDiv');
        parrafo.innerHTML = 'Agradecemos tu visita!'
    }
});
