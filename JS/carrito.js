document.addEventListener('DOMContentLoaded', () => {




let carrito = [];
const DOMitems = document.getElementById('items');









const listaDeProductos = [

{
    id: 1,
    nombre: "quilmes",
    precio: 150,
    stock: 10
},

{
    id: 2,
    nombre: "brahma",
    precio: 100,
    stock: 50  
    }


]


let boton = document.getElementById("buton")

boton.addEventListener("click", anyadirProductoAlCarrito)

function anyadirProductoAlCarrito(){
  
  console.log("click")
}


function anyadirProductoAlCarrito(e) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(e.target.getAttribute('marcador'))
 
}










}
)