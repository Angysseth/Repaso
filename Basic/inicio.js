let martinez = "Canson"
const willi = "Re canson"

console.log(martinez)


const david = {
    ojos: "bonitos",
    sonrisa: "encantadora",
    edad: 1000,
    meEncanta: true
}

console.log(david.sonrisa)

let arregloNovio = ["yo", "amo", "a", "mi", "novio", david]

arregloNovio.push("precioso")

console.log(arregloNovio)

let a = 33
let b = 27

if (a>b) {
    console.log("William es más viejo")
} 

if (b>a) {
    console.log("William es más viejo")
} else {
    console.log("Angela es más guapa")
}

let m = true

while (m) {
    console.log("hola")
    m = false
}

let llave = 12

switch (llave) {
    case 1:
        console.log("ganó");
        break;
    case 2:
        console.log("perdió");
        break;

    default:

    console.log("Ya no juego más -_-");
        break;
}


let mamonArr = [6, 7, 8, "feo"]

for (let index = 0; index < mamonArr.length; index++) {
    console.log(mamonArr[index]);
    
}


function iterar() {

    let mamonArr = [6, 7, 8, "feo"]

    for (let index = 0; index < mamonArr.length; index++) {
        console.log(mamonArr[index]);
    }  
}

iterar()
iterar()