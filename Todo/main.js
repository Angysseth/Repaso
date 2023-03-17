const arregloLista = []

const main = () => {
    const formularioTodo = document.getElementById("formulario")
    formularioTodo.onsubmit = (e) => {
        e.preventDefault()
        const textoTodo = document.getElementById("texto")
        const valorTexto = textoTodo.value
        textoTodo.value = " "
        console.log(valorTexto)
        arregloLista.push(valorTexto)
        console.log(arregloLista)

        
        const listaTodo = document.getElementById("lista")
        listaTodo.innerHTML = " "

        for (let index = 0; index < arregloLista.length; index++) {
            
            listaTodo.innerHTML += "<li>" + arregloLista[index] + "</li>"
            
        }
    }


}