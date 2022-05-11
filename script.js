const entrada = document.querySelector(".input-text");
const salida = document.querySelector(".output-text-area");

function btnEncriptar(){
const textoEncriptado = encriptar(entrada.value);
salida.value = textoEncriptado;

}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i=0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        } 
    }
    return StringParaEncriptar;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(entrada.value);
    salida.value = textoEncriptado;

}
    

function desencriptar(StringParaDesencriptar){
    let matrizCodigon = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i=0; i< matrizCodigon.length; i++){
        if(StringParaDesencriptar.includes(matrizCodigon[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigon[i][0],matrizCodigon[i][1]);
        } 
    }
    return StringParaDesencriptar;
}

function copiar(){
    const salida = document.querySelector(".output-text-area");
    salida.select();
    document.execCommand("copy");
    alert("copiado")

}
