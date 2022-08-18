let carrito = []
if (localStorage.getItem('carrito')) { //si existe el carrito en el almacenamiento
  carrito = JSON.parse(localStorage.getItem('carrito')) //guardo los ids del storage
  console.log(carrito)
}

