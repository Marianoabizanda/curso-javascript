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






let cerveza = {
  marcas: {
    comunes: ["quilmes","brahma","schneider"],
    medianas:["amstel","andes","patagonia"],
    premium:["heineken","stella artois","warsteiner"]
  }
}



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


let marcas
let cervezas



// Ejecucion
while(cervezas !=4){
  cervezas = prompt("Ingrese una opcion: \n1: marcas \n2: precios \n3: cantidad \n4: salir")
  if(cervezas == 1){
    marcas = prompt("1: comunes, 2: medianas, 3: premium")
    if(marcas == 1){
      marcas = cervezasComunes()
    }
    else if (marcas == 2){
      cervezasMedianas()
    }
    else if(marcas == 3){
      cervezasPremium()
      
    }
    
  }

}






  

