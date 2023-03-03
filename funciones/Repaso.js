

function multiplicar(a, b) {
    console.log(a*b)
}

multiplicar(3,6)


function div(c, d) {
    return c/d
}

let resultado = div(15, 3)
console.log(resultado)

// callback

function concatenar(a, b, cb) {
    let stringLargo = a + b
    cb(stringLargo)
}

function call(stringLar) {
    console.log(stringLar);
}

concatenar("hola", "feo", call)
