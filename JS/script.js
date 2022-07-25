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




// -------------------------------------------------------------------------------------------------------------

// class Cerveza { //defini una clase para mi producto

//   constructor(producto, precio, stock) {
//       this.producto = producto,
//       this.precio = precio,
//       this.stock = stock
//   }

// }

// let cervezas = [ //defino un ARRAY solo para cervezas
    
//     new Cerveza ('Quilmes', 100, 500), 
//     new Cerveza ('Brahma',120, 450), 
//     new Cerveza ('Imperial',150 ,370),
   
// ];

// ------------------------------------------------------------------------------------------------------------

// class Vino { //defini una clase para mi producto

//   constructor(producto, precio, stock) {
//       this.producto = producto,
//       this.precio = precio,
//       this.stock = stock
//   }

// }

// let vinos = [ //defino un ARRAY solo para vinos
    
//     new Vino ('Alamos',280 ,220 ), 
//     new Vino ('Aime',200 ,350 ), 
//     new Vino ('Benjamin',180,340 ),
   
// ];


// ------------------------------------------------------------------------------------------------------------

// class Aperitivo { //defini una clase para mi producto

//   constructor(producto, precio, stock) {
//       this.producto = producto,
//       this.precio = precio,
//       this.stock = stock
//   }

// }

// let aperitivos = [ //defino un ARRAY solo para aperitivos
    
//     new Aperitivo ('Fernet Branca', 900, 300), 
//     new Aperitivo ('Campari', 820, 240), 
   
// ];

// -------------------------------------------------------------------------------------------------------------


/*
Cervezas
let producto1 = "quilmes"
let precio1 = 100
let stock1 = 500
let producto2 = "brahma"
let precio2 = 120
let stock2 = 450
let producto3 = "imperial"
let precio3 = 150
let stock3 = 370

Vinos
let producto4 = "alamos"
let precio4 = 280
let stock4 = 220
let producto5 = "aime"
let precio5 = 305
let stock5 = 350
let producto6 = "benjamin"
let precio6 = 180
let stock6 = 340

Aperitivos
let producto7 = "fernet branca"
let precio7 = 900
let stock7 = 300
let producto8 = "campari"
let precio8 = 820
let stock8 = 240        
*/


//  otros
let opciones = 0
let productos = 0






// Constructor  objetos

function Bebida (nombre, precio, stock){ //crear objetos y metodos con clases!!! esto casi que ni se usa
  this.nombre = nombre
  this.precio = precio
  this.stock = stock
}


// creacion de objetos
const cerveza1 = new Bebida ("Quilmes", 100, 500) //ok (pero que Bebida sea una clase)
const cerveza2 = new Bebida ("Brahma", 120, 450)
const cerveza3 = new Bebida ("Imperial", 150, 370)

const vino1 = new Bebida ("Alamos", 280, 220)
const vino2 = new Bebida ("Aime", 200, 350)
const vino3 = new Bebida ("Benjamin", 180, 340)

const aperitivo1 = new Bebida ("Fernet Branca", 900, 300)
const aperitivo2 = new Bebida ("Campari", 820, 240)



// creacion de array para todos los productos en "bebidas"
// const listaBebidas = [Cerveza, Vino, Aperitivo]
const listaCervezas = [cerveza1, cerveza2, cerveza3]; //ok
const listaVinos = [vino1, vino2, vino3];
const listaAperitivos = [aperitivo1, aperitivo2];





// Ejecucion
while(opciones !=2){
  opciones = parseInt(prompt("Ingrese una opcion: \n1: ver productos \n2: salir")) //dos opciones (ver productos o salir)
  console.log(opciones)
  if(opciones === 1){ //accedo a ver los productos
    productos = parseInt(prompt("ver precios de \n1: cervezas \n2: vinos \n3: aperitivos")) //me deja ver los precios de los productos
    comprar(1)
  }

}


//la logica está muy bien planteada! fijate que las 3 funciones (cervezas,vinos y aperitivos son caaasi iguales: te animas a hacer una sola que sirva para lo mismo???)
// HECHO!

function comprar (cerveza) {
  console.log(cerveza)
  if(productos === cerveza){ //veo los precios de las cervezas
    let marca = prompt("comprar cerveza \n1: quilmes $100 \n2: brahma $120 \n3: imperial $150")
    console.log(marca)
    if (marca == 1) {//compra cerveza Quilmes
      let cantidad = parseInt(prompt("cuantas unidades?"))
      let total = cantidad*cerveza1.precio
      alert("$" + total)
    } else if (marca == 2) { //comprar Brahama
      let cantidad = parseInt(prompt("cuantas unidades?"))
      let total = cantidad*cerveza2.precio
      alert("$" + total)
    } else if (marca == 3) { //comprar Imperial
      let cantidad = parseInt(prompt("cuantas unidades?"))
      let total = cantidad*cerveza3.precio
      alert("$" + total)
    } else {
      alert("no se encontró el producto, reinicie la app")
      opciones = 2
    }
  }
  if(productos === 2){ //veo los precios de los vinos
    let marca = prompt("comprar vino \n1: alamos $280 \n2: aime $200 \n3: benjamin $180")
    console.log(marca)
    if (marca == 1) {//compra vino Alamos
      let cantidad = parseInt(prompt("cuantas unidades?"))
      let total = cantidad*vino1.precio
      alert("$" + total)
    } else if (marca == 2) { //compra vino Aime
      let cantidad = parseInt(prompt("cuantas unidades?"))
      let total = cantidad*vino2.precio
      alert("$" + total)
    } else if (marca == 3) { //compra vino Benjamin
      let cantidad = parseInt(prompt("cuantas unidades?"))
      let total = cantidad*vino3.precio
      alert("$" + total)
    } else {
      alert("no se encontró el producto, reinicie la app")
      opciones = 2
    }
  }
  if(productos === 3){ //veo los precios de los aperitivos
    let marca = prompt("comprar aperitivo \n1: fernet branca $900 \n2: campari $820 ")
    console.log(marca)
    if (marca == 1) {//compra aperitivo Branca
      let cantidad = parseInt(prompt("cuantas unidades?"))
      let total = cantidad*aperitivo1.precio
      alert("$" + total)
    } else if (marca == 2) { //compra aperitivo Campari
      let cantidad = parseInt(prompt("cuantas unidades?"))
      let total = cantidad*aperitivo2.precio
      alert("$" + total)
    } else {
      alert("no se encontró el producto, reinicie la app")
      opciones = 2
    }
  }
}



// Defino un array solo para nombres de los productos
let nombresCervezas = []

function agregarCervezas(){
  for(const cerveza of listaCervezas){
     nombresCervezas.push(cerveza.nombre) 
      }
}

agregarCervezas()







// function sumaIva(precio){
//  return  precio * 1.21
// }

// let precioTotalConImpuestos = sumaIva(total)
// alert("El precio total con IVA es de : " + precioTotalConImpuestos)
