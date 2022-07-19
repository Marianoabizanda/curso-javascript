// Desafio complementario


/*let opcion 
while(opcion != 2){
    opcion = prompt("\nopcion 1: sacar turno \nopcion 2: salir")
    for(let i = 1; i < 5; i++){
        if(opcion == 1)
        nombre = prompt("Ingrese su nombre para sacar un turno")
        resultado = alert('\nPaciente:' + nombre + "\nTu turno es el Nº: " +i )

       
        
    }
alert("no quedan turnos disponibles por hoy")
}*/


/*let nombreProductoA = "Vino"
let precioProductoA = 1000
let stockProductoA = 10

let nombreProductoB = "Cervezas"
let precioProductoB = 500
let stockProductoB = 100

let nombreProductoC = "Whiskys"
let precioProductD = 500
let stockProductDB = 100


let precioTotal = 0;


let productoAcomprar = prompt("Ingrese que desea comprar: \n- Vinos \n- Cervezas \n- Whiskys")*/




// for( i = 0; i < 10; i++){

//     let compra1 = prompt("Por favor Ingrese la cantidad de productos, para verificar el Stock: ")
// }

// function saludar(){
//     console.log("Bienvenido estudiantes!")
// }


// let cantidad = 10
// let recibido = 20





// ENTREGADO
// ------------------------------------------------------------------------------------------









// function Cerveza (nombre, precio) {
 
//   this.nombre = nombre
//   this.precio = precio
// }

// const cervezaQuilmes = new Cerveza ("quilmes", 150)
// const cervezaBrahma = new Cerveza ("Brahma", 200)
// const cervezaSchneider = new Cerveza ("Schneider", 220)






// Funciones
function cervezasComunes(){
  comunes = prompt(cerveza.marcas.comunes)
}
function cervezasMedianas(){
  medianas = prompt(cerveza.marcas.medianas)
}
function cervezasPremium(){
  premium = prompt(cerveza.marcas.premium)
}

function PrecioCervezasComunes(quilmes, brhama, schneider ){
  preciocomun = $150, $200, $240
}

let producto1 = "quilmes"
let precio1 = 100
let producto2 = "brahma"
let precio2 = 120
let producto3 = "iguana"
let precio3 = 110

let opciones = 0
let productos = 0

// Ejecucion
while(opciones !=2){
  opciones = parseInt(prompt("Ingrese una opcion: \n1: ver productos \n2: salir")) //dos opciones (ver productos o salir)
  console.log(opciones)
  if(opciones === 1){ //accedo a ver los productos
    productos = parseInt(prompt("ver precios de \n1: cervezas \n2: vinos \n3: vodka")) //me deja ver los precios de los productos
    producto(1)
  }

}




function producto (tipo) {
  console.log(tipo)
  if(productos === tipo){ //veo los precios de las cervezas
    let marca = prompt("comprar cerveza \n1: quilmes $100 \n2: brahma $120 \n3: iguana $110")
    console.log(marca)
    if (marca == 1) {//compra cerveza quilmes
      let cantidad = parseInt(prompt("cuantas unidades?"))
      let total = cantidad*precio1
      alert(total)
    } else if (marca == 2) { //comprar brahama
      let cantidad = parseInt(prompt("cuantas unidades?"))
      let total = cantidad*precio2
      alert(total)
    } else if (marca == 3) { //comprar iguana
      let cantidad = parseInt(prompt("cuantas unidades?"))
      let total = cantidad*precio3
      alert(total)
    } else {
      alert("no se encontró el producto, reinicie la app")
      opciones = 2
    }
  }
}


