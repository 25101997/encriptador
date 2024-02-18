let desplazamiento = 3;

function botonEncriptar(){
    let textoOriginal = document.getElementById('textarea1').value
    if(textoOriginal !== ""){
        //console.log(textoOriginal);
        let textoEncriptado = encriptar(textoOriginal, desplazamiento);
        document.getElementById('textarea2').value = textoEncriptado;
    }
}

function botonDesencriptar(){
    let textoEncriptado = document.getElementById('textarea1').value
    if(textoEncriptado !== ""){
        //console.log(textoEncriptado);
        let textoDesencriptado = desencriptar(textoEncriptado, desplazamiento);
        document.getElementById('textarea2').value = textoDesencriptado;
    }
}

function botonCopiar(){
    let textarea2 = document.getElementById('textarea2').value
    if(textarea2 !== ""){
        document.getElementById('textarea1').value = textarea2;
        document.getElementById('textarea2').value = "";
    }
}

function encriptar(texto, desplazamiento) {
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            let encriptadoCharCode = ((charCode - 97 + desplazamiento) % 26) + 97;
            resultado += String.fromCharCode(encriptadoCharCode);
        } else {
            resultado += texto[i];
        }
    }

    return resultado;
}

function desencriptar(textoEncriptado, desplazamiento) {
    return encriptar(textoEncriptado, 26 - desplazamiento);
}