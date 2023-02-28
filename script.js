

const entrada = document.querySelector(".input-text");
const salida = document.querySelector(".output-text-area");

function btnEncriptar() {
    const textoEncriptado = encriptar(entrada.value);
    salida.value = textoEncriptado;
}

function encriptar(StringParaEncriptar) {
    
    let matrizCodigo = 
    [["e", "enter"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"]]
    if (StringParaEncriptar === '') {
        alert('campo palabra obligatorio')
       return ''
    }
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], 
                matrizCodigo[i][1]);
                
        }
    }
    return StringParaEncriptar;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(entrada.value);
    salida.value = textoEncriptado;
}

function desencriptar(StringParaDesencriptar) {
    let matrizCodigoInv = [["enter", "e"], 
    ["imes", "i"], 
    ["ai", "a"], 
    ["ober", "o"], 
    ["ufat", "u"]]

    if (StringParaDesencriptar === '') {
        alert('campo palabra obligatorio')
       return ''
    }

    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i = 0; i < matrizCodigoInv.length; i++) {
        if (StringParaDesencriptar.includes(matrizCodigoInv[i][0])) {
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigoInv[i][0], 
                matrizCodigoInv[i][1]);
        }
    }
    return StringParaDesencriptar;
}

function copiar() {
    const salida = document.querySelector(".output-text-area");
    salida.select();
    document.execCommand("copy");
    alert("copiado")
}

const textarea = document.getElementById('mi-textarea');

textarea.addEventListener('click', function() {
  this.select();
});


