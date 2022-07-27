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





// Constructor  objetos


/*function Bebida (nombre, precio, stock){
    function Bebida (nombre, precio, stock){ //crear objetos y metodos con clases!!! esto casi que ni se usa
      this.nombre = nombre
      this.precio = precio
      this.stock = stock
    }*/
    
    
    // creacion de objetos
    // const cerveza1 = new Bebida ("Quilmes", 100, 500)
    // const cerveza1 = new Bebida ("Quilmes", 100, 500) //ok (pero que Bebida sea una clase)
    // const cerveza2 = new Bebida ("Brahma", 120, 450)
    // const cerveza3 = new Bebida ("Imperial", 150, 370)
    
    // const vino1 = new Bebida ("Alamos", 280, 220)
    // const vino2 = new Bebida ("Aime", 200, 350)
    // const vino3 = new Bebida ("Benjamin", 180, 340)
    // const aperitivo1 = new Bebida ("Fernet Branca", 900, 300)
    // const aperitivo2 = new Bebida ("Campari", 820, 240)
    
    // creacion de array para todos los productos en "bebidas"
    // const listaBebidas = [Cerveza, Vino, Aperitivo]
    // const listaCervezas = [cerveza1, cerveza2, cerveza3];
    // const listaCervezas = [cerveza1, cerveza2, cerveza3]; //ok
    // const listaVinos = [vino1, vino2, vino3];
    // const listaAperitivos = [aperitivo1, aperitivo2];

// function Bebida (nombre, precio, stock){ //crear objetos y metodos con clases!!! esto casi que ni se usa
//   this.nombre = nombre
//   this.precio = precio
//   this.stock = stock
// }


// creacion de objetos
// const cerveza1 = new Bebida ("Quilmes", 100, 500) //ok (pero que Bebida sea una clase)
// const cerveza2 = new Bebida ("Brahma", 120, 450)
// const cerveza3 = new Bebida ("Imperial", 150, 370)

// const vino1 = new Bebida ("Alamos", 280, 220)
// const vino2 = new Bebida ("Aime", 200, 350)
// const vino3 = new Bebida ("Benjamin", 180, 340)

// const aperitivo1 = new Bebida ("Fernet Branca", 900, 300)
// const aperitivo2 = new Bebida ("Campari", 820, 240)



// creacion de array para todos los productos en "bebidas"
// const listaBebidas = [Cerveza, Vino, Aperitivo]
// const listaCervezas = [cerveza1, cerveza2, cerveza3]; //ok
// const listaVinos = [vino1, vino2, vino3];
// const listaAperitivos = [aperitivo1, aperitivo2];




 //------------------------------------------------------------------------------------------------ 

  let lista = [] //esta variable va a llenarse con algunas cositas que te mejoré

  class Bebida { //defini una clase para mis productos
    constructor(producto, precio, stock) { //mejorar la identacion
        this.producto = producto,
        this.precio = precio,
        this.stock = stock
    } 
  }

  const cervezaQuilmes = new Bebida ('Quilmes', 100, 500)
  const cervezaBrahma = new Bebida ('Brahma',120, 450)
  const cervezaImperial = new Bebida ('Imperial',150 ,370)
  const vinoAlamos = new Bebida ('Alamos',280 ,220 )
  const vinoAime = new Bebida ('Aime',200 ,350 )
  const vinoBenjamin = new Bebida ('Benjamin',180,340 )
  const aperitivoBranca = new Bebida ('Fernet Branca', 900, 300)
  const aperitivoCampari = new Bebida ('Campari', 820, 240)
 
  // ---------------------------------------------------------------------------------------------

   // CREO LOS ARRAYS

   //defino un ARRAY solo para cervezas
   let listaCervezas = [cervezaQuilmes, cervezaBrahma, cervezaImperial ];
   
   //defino un ARRAY solo para vinos
   let listaVinos = [vinoAlamos, vinoAime, vinoBenjamin ];
    
   //defino un ARRAY solo para aperitivos
   
   let listaAperitivos = [ aperitivoBranca, aperitivoCampari ];
    
   
    //defino un ARRAY solo para productos
    let listaProductos = [ "1: Cervezas", "2: Vinos", "3: Aperitivos" ];
  


    //  otros
    let opciones = 0
    let productos = 0
    
    
// ----------------------------------------------------------------------------------------------
// Funcion para agregar tipos de bebidas nuevas
// Array para usar dentro de menu de opciones
    let nombresProductos = []


    function agregarProductos(){//esta funcion retorna un array EXACTAMENTE IGUAL a listaProducto: NO ES NECESARIA
      for(const producto of listaProductos){
         nombresProductos.push(producto) 
          }
    }
    
    agregarProductos() //no es necesario

// ----------------------------------------------------------------------------------------------
    
    // Ejecucion
    while(opciones !=2){
      opciones = parseInt(prompt("Ingrese una opcion: \n1: ver productos \n2: salir")) //dos opciones (ver productos o salir)
      console.log(opciones)
      if(opciones === 1){ //accedo a ver los productos
        productos = parseInt(prompt("ver precios de: \n" + nombresProductos.join("\n"))) //me deja ver los precios de los productos
        //comprar(1) //por que 1??? no deberia ser el numero que ingresa el usuario?
        carritoDeCompra(productos) //por otro lado: donde le avisas al usuario que tiene que presionar un numero en lugar del nombre del producto? mejorar eso para la pre-entrega
      }
    }
    //la logica está muy bien planteada! fijate que las 3 funciones (cervezas,vinos y aperitivos son caaasi iguales: te animas a hacer una sola que sirva para lo mismo???)
    // HECHO!
    function comprar (cerveza) { //le podes poner cualquier nombre al parametro: pero es un numero, yo le pondria num o algo mas intuitivo
      console.log(cerveza)
      if(productos === cerveza){ //esto está mal: la variable productos va a ser siempre igual a la variable cerveza
        let marca = prompt("comprar cerveza \n1: quilmes $100 \n2: brahma $120 \n3: imperial $150")
        //MARCA SE TIENE QUE GENERAR DINAMICAMENTE. QUE SUCEDERIA SI CREARA UNA CUARTA CERVEZA??? NO SE AGREGARIA NUNCA ESA OPCION
        console.log(marca)
        if (marca == 1) {//ESTE CODIGO SE REPITE: USAR FUNCIONES!
          let cantidad = parseInt(prompt("cuantas unidades?"))
          let total = cantidad*cervezaQuilmes.precio
          alert("$" + total)
        } else if (marca == 2) { //comprar Brahama
          let cantidad = parseInt(prompt("cuantas unidades?"))
          let total = cantidad*cervezaBrahma.precio
          alert("$" + total)
        } else if (marca == 3) { //comprar Imperial
          let cantidad = parseInt(prompt("cuantas unidades?"))
          let total = cantidad*cervezaImperial.precio
          alert("$" + total)
        } else {
          alert("no se encontró el producto, reinicie la app")
          opciones = 2
        }
      }
      if(productos === 2){ //SI EL PARAMETRO QUE INGRESA A LA FUNCION Y A EVALUAR ES CERVEZA: PORQUE EVALUO PRODUCTOS?
        let marca = prompt("comprar vino \n1: alamos $280 \n2: aime $200 \n3: benjamin $180")
        console.log(marca)
        if (marca == 1) {//compra vino Alamos
          let cantidad = parseInt(prompt("cuantas unidades?"))
          let total = cantidad*vinoAlamos.precio
          alert("$" + total)
        } else if (marca == 2) { //compra vino Aime
          let cantidad = parseInt(prompt("cuantas unidades?"))
          let total = cantidad*vinoAime.precio
          alert("$" + total)
        } else if (marca == 3) { //compra vino Benjamin
          let cantidad = parseInt(prompt("cuantas unidades?"))
          let total = cantidad*vinoBenjamin.precio
          alert("$" + total)
        } else {
          alert("no se encontró el producto, reinicie la app")
          opciones = 2
        }
      }
      if(productos === 3){ //SI EL PARAMETRO QUE INGRESA A LA FUNCION Y A EVALUAR ES CERVEZA: PORQUE EVALUO PRODUCTOS?
        let marca = prompt("comprar aperitivo \n1: fernet branca $900 \n2: campari $820 ")
        console.log(marca)
        if (marca == 1) {//compra aperitivo Branca
          let cantidad = parseInt(prompt("cuantas unidades?"))
          let total = cantidad*aperitivoBranca.precio
          alert("$" + total)
        } else if (marca == 2) { //compra aperitivo Campari
          let cantidad = parseInt(prompt("cuantas unidades?"))
          let total = cantidad*aperitivoCampari.precio
          alert("$" + total)
        } else {
          alert("no se encontró el producto, reinicie la app")
          opciones = 2
        }
      }
    }

  function generarLista (arrayDeBebidas) {
    lista = [] //siempre que arranco la funcion verifico que la lista esté vacía
    for (let unaBebida of arrayDeBebidas) { //recorro el array para generar la lista
      lista.push(unaBebida.producto) //pusheo
    }
    let producto = parseInt(prompt("comprar: \n" + lista.join("\n")))
    //para la pre-entrega agregar condicional: que pasa si cantidad no es numero??? y si escribe un numero que no corresponde??? que tengo que hacer???
    cantidadBebida(producto,arrayDeBebidas)
  }

  function cantidadBebida (num,arrayDeBebidas) {
    let bebidaSeleccionada = arrayDeBebidas[num-1]
    let cantidad = parseInt(prompt("cuantas unidades?")) //pido la cantidad
    //para la pre-entrega agregar condicional: que pasa si cantidad no es numero??? y si escribe un numero que no corresponde??? que tengo que hacer???
    let subTotal = cantidad*bebidaSeleccionada.precio
    //para la pre-entrega agregar condicional: que pasa si cantidad excede stock???
    alert("$" + subTotal)
    return subTotal //esta variable que se returna: acumulala en alguna otra variable para obtener el TOTAL cuando el usuario toca 2 y sale del programa
  }

  function carritoDeCompra (num) {
    console.log(num) //verifico la entrada
    if (num === 1) { //si es cerveza
      generarLista(listaCervezas)
    } else if (num === 2) { //si es vino
      generarLista(listaVinos)
    } else if (num === 3) { //si es aperitivo
      generarLista(listaAperitivos)
    } else { //sino
      alert("no se encontró el producto, reinicie la app") //que tendria que hacer para que me vuelva a preguntar???
      //para la pre-entrega que no se reinicie el programa
      opciones = 2
    }
  }