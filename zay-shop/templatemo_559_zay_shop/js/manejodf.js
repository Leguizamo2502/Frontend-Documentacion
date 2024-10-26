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