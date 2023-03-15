const arregloTodo = []

const main = () => {
    const formulario = document.getElementById("todo-list")
    formulario.onsubmit = (e) => {
        e.preventDefault()
        const campo = document.getElementById("campoTexto")
        campoTexto = campo.value
        console.log(campoTexto)
        campo.value = " "
        arregloTodo.push(campoTexto)
        const elementoLista = document.getElementById("list-element")
        elementoLista.innerText = " "

        for (let index = 0; index < arregloTodo.length; index++) {
            elementoLista.innerHTML += "<li>" + arregloTodo[index]+ "</li>"
            
        }
    }
}
