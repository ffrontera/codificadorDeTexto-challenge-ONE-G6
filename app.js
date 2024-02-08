/* Las variables a, e, i, o, u son las vocales que se encriptan, su valor es la encriptacion, 
como regla general tomamos como primer letra de encriptacion la misma vocal.  */
let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";
const entradaTexto = document.getElementById("entradaTexto");
const salidaTextoDespues = document.getElementById("despues");
const salidaTextoAntes = document.getElementById("antes");
const parrafoSalidaTexto = document.getElementById("main-salidaTexto");
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');
const textoAdvertencia = document.getElementById('advertencia');

function encriptarTexto(texto){
    
    let textoEncriptado = '';

    for(let indice = 0; indice < texto.length; indice++){
        const letra = texto[indice];
        if(letra === 'a'){
            textoEncriptado += a;
        } else if (letra === 'e') {
            textoEncriptado += e;
        } else if (letra === 'i') {
            textoEncriptado += i;
        } else if (letra === 'o') {
            textoEncriptado += o;
        } else if (letra == 'u') {
            textoEncriptado += u;
        } else {
            textoEncriptado += letra;
        }
    }

    return textoEncriptado
}

function desencriptarTexto(texto){

    let textoDesencriptado = '';
    
    if (texto.includes(a) || texto.includes(e) || texto.includes(i) || texto.includes(o) || texto.includes(u)){
        for(let indice = 0; indice < texto.length; indice++){
            const letra = texto[indice];
            if(letra === 'a'){
                textoDesencriptado += letra;
                indice += a.length - 1;
            } else if (letra === 'e') {
                textoDesencriptado += letra;
                indice += e.length - 1;
            } else if (letra === 'i') {
                textoDesencriptado += letra;
                indice += i.length - 1;
            } else if (letra === 'o') {
                textoDesencriptado += letra;
                indice += o.length - 1;
            } else if (letra == 'u') {
                textoDesencriptado += letra;
                indice += u.length - 1; 
            } else {
                textoDesencriptado += letra;
            }
        }
    }else{
        textoDesencriptado = "El texto ingresado no está encriptado o usa una encriptación diferente, para reiniciar el encriptador presione el logo en la parte superior izquierda.";
    }
    
    return textoDesencriptado
}

function mostrarTexto(accion){
    if(entradaTexto.value == ''){
        return
    }


    salidaTextoAntes.style.display = "none";
    salidaTextoDespues.style.display = 'flex';
    
    if (accion === 'encriptar'){
        parrafoSalidaTexto.innerHTML = encriptarTexto(entradaTexto.value);
    } else {
        parrafoSalidaTexto.innerHTML = desencriptarTexto(entradaTexto.value); 
    }

    entradaTexto.value = '';

    botonEncriptar.disabled = true; 
    botonDesencriptar.disabled = true;
    entradaTexto.disabled = true;

}

async function copiarTexto(){
    try {
        await navigator.clipboard.writeText(parrafoSalidaTexto.innerHTML);
    } catch (err) {
        console.error('No pudimos copiar: ', err);
      }
    
    salidaTextoAntes.style.display = "flex"
    salidaTextoDespues.style.display = 'none';
    
    botonEncriptar.disabled = false; 
    botonDesencriptar.disabled = false;
    entradaTexto.disabled = false;

    alert('¡Mensaje copiado al portapapeles!')
}
const permitidos = /^[a-z0-9 ]+$/;
function verificarTexto(texto){
    if (permitidos.test(texto) || texto == ''){
        botonEncriptar.disabled = false; 
        botonDesencriptar.disabled = false;
        textoAdvertencia.style.color = 'darkgrey';
    }else{
        botonEncriptar.disabled = true; 
        botonDesencriptar.disabled = true;
        textoAdvertencia.style.color = 'lightcoral';
    }
}
