const resta = (a, b, callback) => {
    let resultado = a - b
    callback(resultado)
} 

// const callback = (resultado) => {
//     console.log(resultado);
// }

resta(5, 3, function(resultado){
    console.log(resultado);
}) 