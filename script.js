function buscarLetraA() {
    const textoEntrada = document.getElementById('inputText').value;
    const contenedorResultado = document.getElementById('resultado');
    const patronLetrasA = /[aáAÁ]/g;

    
    function resaltarLetrasA(texto) {
        return texto.replace(patronLetrasA, match => `<span class="letra-a">${match}</span>`);
    }

    
    function encontrarPosicionesA(texto) {
        const posiciones = [];
        let coincidencia;
        while ((coincidencia = patronLetrasA.exec(texto)) !== null) {
            posiciones.push(coincidencia.index + 1);
        }
        return posiciones;
    }

    
    const textoResaltado = resaltarLetrasA(textoEntrada);
    const posicionesA = encontrarPosicionesA(textoEntrada);

    
    let mensajeResultado = '';
    if (posicionesA.length > 0) {
        const esPlural = posicionesA.length > 1;
        mensajeResultado = `La letra 'a, A' (con o sin tilde) está en la${esPlural ? 's' : ''} posición${esPlural ? 'es' : ''}: ${posicionesA.join(', ')}.<br><br>`;
        mensajeResultado += `Texto resaltado: ${textoResaltado}`;
    } else {
        mensajeResultado = 'No se encontró la letra \'a\' (con o sin tilde) en el texto ingresado.';
    }

    
    contenedorResultado.classList.remove('show');
    setTimeout(() => {
        contenedorResultado.innerHTML = mensajeResultado;
        contenedorResultado.classList.add('show');
    }, 300);
}


