const docs = document.querySelectorAll('.docs');
docs.forEach(doc => {
    doc.addEventListener('click', function() {

        // Desplazamiento suave hacia el div objetivo
        document.getElementById('contenedorIframes').scrollIntoView({ behavior: 'smooth' });
    });
});


function mostrarIntroduccion() {
    const iframes = document.querySelectorAll('.iframes');
    iframes.forEach(iframe => {
        iframe.classList.add('oculto');
    });
    document.getElementById("introduccion").classList.remove('oculto');
}
function mostrarResumen() {
    const iframes = document.querySelectorAll('.iframes');
    iframes.forEach(iframe => {
        iframe.classList.add('oculto');
    });
    document.getElementById("resumen").classList.remove('oculto');
}

function mostrarDescripcion(){
    const iframes = document.querySelectorAll('.iframes');
    iframes.forEach(iframe => {
        iframe.classList.add('oculto');
    });
    document.getElementById("descripcion").classList.remove('oculto');
}

function mostrarSolucion(){
    const iframes = document.querySelectorAll('.iframes');
    iframes.forEach(iframe => {
        iframe.classList.add('oculto');
    });
    document.getElementById("solucion").classList.remove('oculto');
}

function mostrarPlanTrabajo(){
    const iframes = document.querySelectorAll('.iframes');
    iframes.forEach(iframe => {
        iframe.classList.add('oculto');
    });
    document.getElementById("planTrabajo").classList.remove('oculto');
}

function mostrarEquipoTrabajo(){
    const iframes = document.querySelectorAll('.iframes');
    iframes.forEach(iframe => {
        iframe.classList.add('oculto');
    });
    document.getElementById("equipoTrabajo").classList.remove('oculto');
}

function mostrarPresupuesto(){
    const iframes = document.querySelectorAll('.iframes');
    iframes.forEach(iframe => {
        iframe.classList.add('oculto');
    });
    document.getElementById("presupuesto").classList.remove('oculto');
}

function mostrarPlanMantenimiento(){
    const iframes = document.querySelectorAll('.iframes');
    iframes.forEach(iframe => {
        iframe.classList.add('oculto');
    });
    document.getElementById("mantenimiento").classList.remove('oculto');
}

function mostrarCronogramaPagos(){
    const iframes = document.querySelectorAll('.iframes');
    iframes.forEach(iframe => {
        iframe.classList.add('oculto');
    });
    document.getElementById("cronogramaPagos").classList.remove('oculto');
}
