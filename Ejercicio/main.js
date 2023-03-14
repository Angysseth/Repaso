const main = () => {
    const formulario = document.getElementById("todo-list")
    formulario.onsubmit(e) =>{
    e.preventDefault()
    const campo = document.getElementById("campoTexto")
    campoTexto = campo.value
    console.log(campoTexto);
    campoTexto.value = " "
    }
}