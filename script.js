const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
// corchetesalt 91

function btnEncriptar(){ //Llamamos la funcion desde el index
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    console.log(btnEncriptar);
    textArea.value = ""; //Es para limpiar el campo
    mensaje.style.backgroundImage = "none"  //Quita la imagen al pasar texto
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    

}

function btnCopiar(){  //
    const textoEncriptado = copiar(mensaje.value)
    copiar.value = textoEncriptado
    
}

function btnLimpiar() {
    textArea.value = ""; // Limpia el campo de entrada de texto
    mensaje.value = "";  // Limpia el campo de salida de mensaje
    mensaje.style.backgroundImage = ""; // Restaura la imagen de fondo 
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; //Matriz array
    console.table(matrizCodigo); //Ver la matriz en el navegador
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){ //El incrementador hace el recorrido en la matriz
         if (stringEncriptada.includes(matrizCodigo[i][0])){  //Usamos el metodo includes
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])  //Con el metodo replaceAll sustituimos todo

         }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];  
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){ //El incrementador hace el recorrido en la matriz
        if (stringDesencriptada.includes(matrizCodigo[i][1])){   //Se invierte el contyador ahora a 1
           stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])  //Con el metodo replaceAll sustituimos todo

        }
   }
   return stringDesencriptada;

}

function copiar(){
    // Selecciona el texto encriptado en el área de texto
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para móviles

    // Copia el texto al portapapeles
    document.execCommand("copy"); // Realiza la acción de copiar el texto que ha sido previamente seleccionado

    // Muestra una alerta de que se ha copiado
    alert("Texto copiado con exito");
}

