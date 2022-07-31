//OPTIMICÉ TU CODIGO Y LO MEJORÉ CON LOS ULTIMOS TEMAS:
    //SIEMPRE QUE APRENDAMOS ALGO TENES QUE INCORPORARLO

//TE PIDO QUE PARA LA PROXIMA CORRECCION GENERES UN SCRIPT COMENTADO Y UNO LIMPIO
//EL LIMPIO LO VAS A USAR PARA TU PAGINA
//EL COMENTADO VA A SER IGUAL AL LIMPIO PERO CON TODOS LOS COMENTARIOS DE LO QUE HACES

//IMPORTANTE:
    //COMENTAR LINEA POR LINEA
    //TODAS!!! PARA ENTENDER LA LOGICA DEL PASO A PASO DE CADA COSA QUE HACER
    //NO TE COMENTÉ TODO: DEJO ALGUNAS LINEAS PARA VOS
    //EN EL ARCHIVO LIMPIO: TE DEJÉ DOS COSITAS PARA TRATAR DE HACER

//1
//DEFINIR VARIABLES GLOBALES
let opciones = 0 //habilita o cierra el programa
let productos = [] //va a contener todas las bebidas de la categoria
let producto = {} //va a contener la bebida que quiere comprar
let unidades = 0 //va a contener la cantidad de bebidas
let total = 0 //va a sumar todos los subtotales
let categoriaIngresada = "" //la opcion que ingresa el usuario
let nombreIngresado = "" //la opcion que ingresa el usuario

//2
//DEFINIR PRODUCTOS
class Bebida { //creo una clase
  constructor(producto, precio, stock, categoria) { //utilizo el metodo contructor y defino las propiedades de la clase
      this.nombre = producto,
      this.precio = precio,
      this.stock = stock
      this.categoria = categoria
      //agregar una propiedad foto!!!
  }
}
//3
//CREAR PRODUCTOS
const cerveza1 = new Bebida('Quilmes', 100, 500, 'Cerveza') //AGREGAR FOTO (LA RUTA DEBERIAS AGREGAR: DESPUES LA VAS A USAR PARA RENDERIZAR LAS CARDS DE PRODUCTOS)
//console.log(cerveza1.categoria.toLowerCase()) //verifico que se cargó bien el producto
const cerveza2 = new Bebida('Brahma', 120, 450, 'Cerveza')
const cerveza3 = new Bebida('Imperial', 150, 370, 'Cerveza')
const vino1 = new Bebida('Alamos', 280, 220, 'Vino')
const vino2 = new Bebida('Aime', 200, 350, 'Vino')
const vino3 = new Bebida('Benjamin', 180, 340, 'Vino')
const aperitivo1 = new Bebida('Fernet Branca', 900, 300, 'Aperitivo')
const aperitivo2 = new Bebida('Campari', 820, 240, 'Aperitivo')

//4
//JUNTAR EN ARRAYS
let listaProductos = ['Cerveza','Vino','Aperitivo']
let listaBebidas = [cerveza1, cerveza2, cerveza3, vino1, vino2, vino3, aperitivo1, aperitivo2]

//5
//EJECUCION
while(opciones != 2) { //mientras que opciones sea diferente de 2 el programa va a ejecutar
  opciones = parseInt(prompt("Ingrese una opcion: \n1: ver productos \n2: salir")) //le pido una accion al usuario
  //console.log(opciones) //verifico la opcion
  if(opciones === 1){  //si es 1 muestra las opciones
    do { //hacer
      //console.log(listaProductos) //verifico que llega bien lo que tengo que evaluar
      //console.log(listaBebidas) //verifico que llega bien
      categoriaIngresada = (prompt('Ingrese el nombre de la categoria: \n '+listaProductos.join('\n '))) //renderizo dinamicamente los nombres y le pido al usuario que escriba alguna opcion
      console.log(categoriaIngresada) //verifico lo que ingresó
      productos = listaBebidas.filter(cadaBebida => cadaBebida.categoria === categoriaIngresada) //los filtro
      console.log(productos) //verifico el filtro
    } while (productos.length === 0) //(do-while) mientras productos no exista
    //una vez asegurado que ingresó una opcion válida
    seleccionarBebida(productos) //evaluo la funcion seleccionar
    //una vez que seleccionada la bebida
    cantidadBebida(producto) //evaluo la funcion pedir cantidad
  }
}
//solo si sale del programa
if (total===0) {
  console.log(total)
  alert("vuelva pronto!")
} else {
  alert("gracias por su compra!")
}

//5*
//FUNCION DE EJECUCION INTERNA  
function seleccionarBebida(arrayDeBebidas) {
  lista = [] //siempre que arranco la funcion verifico que la lista esté vacía
  for (let unaBebida of arrayDeBebidas) { //recorro el array para generar la lista
    lista.push(unaBebida.nombre) //pusheo
  }
  do {
    nombreIngresado = prompt("Ingrese el nombre de la bebida a comprar: \n" + lista.join("\n"))
    console.log(nombreIngresado) //verifico lo que ingresó
    producto = arrayDeBebidas.filter(cadaBebida => cadaBebida.nombre == nombreIngresado) //los filtro
  } while (producto.length === 0)
  //producto es un array con un unico producto asi que lo convierto en objeto para trabajarlo mejor
  producto = producto[0]
}

//5*
//EJECUCION INTERNA  
function cantidadBebida (bebida) {
  do {
    unidades = parseInt(prompt("cuantas unidades?")) //pido la cantidad
  } while (isNaN(unidades) || unidades<0 || unidades>bebida.stock)
  let subTotal = unidades*bebida.precio
  total += subTotal
  alert("subtotal: $ " +subTotal+ " - TOTAL: $ " +total)
  return subTotal
}