// let opciones = 0
// let productos = []
// let producto = {}
// let unidades = 0
// let total = 0
// let categoriaIngresada = ""
// let nombreIngresado = ""

// class Bebida {      
//   constructor(producto, precio, stock, categoria) {
//       this.nombre = producto,
//       this.precio = precio,
//       this.stock = stock
//       this.categoria = categoria //agregar la propiedad foto: asi también la podes renderizar dinamicamente
//   }
// }

// const cerveza1 = new Bebida('Quilmes', 100, 500, 'Cerveza')
// const cerveza2 = new Bebida('Brahma', 120, 450, 'Cerveza')
// const cerveza3 = new Bebida('Imperial', 150, 370, 'Cerveza')
// const vino1 = new Bebida('Alamos', 280, 220, 'Vino')
// const vino2 = new Bebida('Aime', 200, 350, 'Vino')
// const vino3 = new Bebida('Benjamin', 180, 340, 'Vino')
// const aperitivo1 = new Bebida('Fernet Branca', 900, 300, 'Aperitivo')
// const aperitivo2 = new Bebida('Campari', 820, 240, 'Aperitivo')

// let listaProductos = ['Cerveza','Vino','Aperitivo']
// let listaBebidas = [cerveza1, cerveza2, cerveza3, vino1, vino2, vino3, aperitivo1, aperitivo2]



// while(opciones != 2) {
//   opciones = parseInt(prompt("Ingrese una opcion: \n1: ver productos \n2: salir"))
//   if(opciones === 1){ 
//     do {    
//       categoriaIngresada = (prompt('Ingrese el nombre de la categoria: \n '+listaProductos.join('\n ')))
//       cards()
//       console.log(categoriaIngresada)
//       productos = listaBebidas.filter(cadaBebida => cadaBebida.categoria === categoriaIngresada)
//       console.log(productos)
//     } 
//     while (productos.length === 0)  
//     seleccionarBebida(productos)  
//     cantidadBebida(producto)
    
//   }
// }

// if (total===0)   {
//   console.log(total)
//   alert("vuelva pronto!")
// } else {
//   alert("gracias por su compra!") //SI NO COMPRA NADA, DEBERÍA APRECER ESTA ALERTA, pero no logré hacerla funcionar: podras?
    
// }

//PRESTAR ATENCION A LA IDENTACION/ORDEN DEL CODIGO
//EN UN ARCHIVO CODIGO LIMPIO Y EN OTRO COMENTARIOS PORFA
// Creo una funcion para generar cards para cada producto
// function cards(){  
//   for(const bebida of listaBebidas){
//     let card = document.createElement("div")
//     card.innerHTML = `<h3>${bebida.nombre}</h3>
//                       <p>$ ${bebida.precio}</p>
//                       <p> stock: ${bebida.stock} unidades</p>`
//     document.body.append(card)
//   }
// }

// function seleccionarBebida(listaBebidas) {
//   lista = []
//   for (let unaBebida of listaBebidas) {
//     lista.push(unaBebida.nombre)
//   }
//   do {
//     nombreIngresado = prompt("Ingrese el nombre de la bebida a comprar: \n" + lista.join("\n"))
//     console.log(nombreIngresado)
//     producto = listaBebidas.filter(cadaBebida => cadaBebida.nombre == nombreIngresado)
//   } while (producto.length === 0)
//   producto = producto[0]
// }

// function cantidadBebida (bebida) {
//   do {
//     unidades = parseInt(prompt("cuantas unidades?"))
//   } while (isNaN(unidades) || unidades<0 || unidades>bebida.stock)
//   let subTotal = unidades*bebida.precio
//   total += subTotal
//   alert(`subtotal: $ ${subTotal} - TOTAL: $ ${total}`) //fijate de poner más lindo esto
//   return subTotal
// }




let boton = document.getElementById("buton")

boton.addEventListener("click", clickAgregar)

function clickAgregar(){
  
  console.log("click")
}