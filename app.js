function imagendefondo(bool){
    const input = document.getElementById('resultadoTexto');

    if (bool) {
      input.style.backgroundImage = 'none';
    } else {
      input.style.backgroundImage = 'url(../assets/Muñeco.png)';
    }
}

function validarTexto() {
    let input = document.getElementById("texto__recibido");
    input.value = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function encriptar() {
    let texto = document.getElementById("texto__recibido").value;
    if(texto){
        imagendefondo(true);
        let encriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
            
        document.getElementById("resultadoTexto").value = encriptado;
    }else{
        document.getElementById("resultadoTexto").value = "";
        imagendefondo(false);
    }  
        
        
}

function desencriptar() {
    let texto = document.getElementById("texto__recibido").value;
    if(texto){
        imagendefondo(true);
        let desencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        document.getElementById("resultadoTexto").value = desencriptado;
    }else{
        document.getElementById("resultadoTexto").value = "";
        imagendefondo(false);
    }
}

function copiarAlPortapapeles() {
    var texto = document.getElementById('resultadoTexto');
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
