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

    return textoDesencriptado
}

function mostrarTexto(accion){
    
    salidaTextoAntes.style.display = "none";
    salidaTextoDespues.removeAttribute("hidden");
    
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
    salidaTextoDespues.setAttribute("hidden", "false");
    
    botonEncriptar.disabled = false; 
    botonDesencriptar.disabled = false;
    entradaTexto.disabled = false;

    alert('¡Mensaje copiado al portapapeles!')
}