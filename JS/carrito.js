document.addEventListener('DOMContentLoaded', () => {
    let carrito = [];

    // const DOMitems = document.getElementById('items');
    // const DOMtotal = document.querySelector('#total');
    // const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    const listaDeCervezas = [
        {
            id: 1,
            nombre: "Quilmes",
            precio: 100,
            stock: 500,
            categoria: "cerveza",
            img: "../images/images cervezas/QUILMES-LATA-473-300X300.webp"
        },
        {
            id: 2,
            nombre: "Brahma",
            precio: 120,
            stock: 450 , 
            categoria: "cerveza",
            img: "../images/images cervezas/BRAHMA-LATA-300X300.webp"
        },
        {
            id: 3,
            nombre: "Heineken",
            precio: 150,
            stock: 370,
            categoria: "cerveza",
            img: "../images/images cervezas/AnyConv.com__HEINEKEN-473-300X300(1).webp"
        },
        {
            id: 4,
            nombre: "Stella Artois",
            precio: 220,
            stock: 450,
            categoria: "cerveza",
            img: "../images/images cervezas/AnyConv.com__Stella-Lata-300x300.webp"
        },
        {
            id: 5,
            nombre: "Stella Noire",
            precio: 220,
            stock: 400,
            categoria: "cerveza",
            img: "../images/images cervezas/AnyConv.com__project_20200925_1319378-011-1e181d976f40159ac316010508482964-1024-1024-300x300.webp"
        },
        {
            id: 6,
            nombre: "Corona",
            precio: 230,
            stock: 300,
            categoria: "cerveza",
            img: "../images/images cervezas/CERVEZA-CORONA-710-300x300.webp"
        },
        
    ]

    
    const Domitems = document.getElementById ("items")
    const contenedorCarrito = document.getElementById ('carrito')



    const botonVaciar = document.getElementById("boton-vaciar")
    botonVaciar.addEventListener("click", ()=>{
        carrito.length = 0
        actualizarCarrito()
    })
    
    





    listaDeCervezas.forEach((producto) => {

        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `

            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <p class="card-text">stock: ${producto.stock}</p>
            <img src=${producto.img} id="img-card">
            <button id="agregar${producto.id}" class="boton-agregar">Agregar</button>
            
        `
        Domitems.appendChild(div)



        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)

    })
    })


    
    // funcion para agregar productos al carrito
    const agregarAlCarrito = (prodId) => {
        const item = listaDeCervezas.find((prod) => prod.id === prodId)
        carrito.push(item)
        actualizarCarrito()
        console.log(carrito)
       
    }



    

    const eliminarDelCarrito = (prodId) =>{

        const item = carrito.find((prod) => prod.id === prodId)

        const indice = carrito.indexOf(item)
        
        carrito.splice(indice, 1)
        actualizarCarrito()
        
    }





    const actualizarCarrito = () => {
        contenedorCarrito.innerHTML = ""

        carrito.forEach((prod) =>{
            const div = document.createElement('div')
            div.className = ('productoEnCarrito')
            div.innerHTML = `
            <p> ${prod.nombre}</p>
            <p> Precio: ${prod.precio}</p>
            <p> Cantidad: ${prod.stock}</p>
            <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar btn btn-danger mx-1">x</button>
            `
            
            contenedorCarrito.appendChild(div)
        })


    }



    



































    


//      function renderizarProductos (){

//         listaDeCervezas.forEach((info) =>{
//             const miNodo = document.createElement('div');
//             miNodo.classList.add('card', 'col-sm-4');

//             const miNodoCardBody = document.createElement('div');
//             miNodoCardBody.classList.add('card-body');

//             const miNodoTitle = document.createElement('h5');
//             miNodoTitle.classList.add('card-title');
//             miNodoTitle.innerText = info.nombre;

//             const miNodoPrecio = document.createElement('p');
//             miNodoPrecio.classList.add('card-text');
//             miNodoPrecio.innerText = `$${info.precio}`;
//             //Stock
//             const miNodoStock = document.createElement('p');
//             miNodoStock.classList.add('card-text');
//             miNodoStock.innerText = `Stock: ${info.stock}`;

//             const miNodoImagen = document.createElement('img')
//             miNodoImagen.classList.add('imagen')
//             miNodoImagen.setAttribute('src', info.img);

//             const miNodoBoton = document.createElement('button');
//             miNodoBoton.classList.add('btn', 'btn-primary');
//             miNodoBoton.innerText = '+';
//             miNodoBoton.setAttribute('marcador', info.id);
//             miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
//             // Insertamos
//             miNodoCardBody.append(miNodoTitle);
//             miNodoCardBody.append(miNodoPrecio);
//             miNodoCardBody.append(miNodoStock);
//             miNodoCardBody.append(miNodoImagen);
//             miNodoCardBody.append(miNodoBoton);
//             miNodo.append(miNodoCardBody);
//             DOMitems.append(miNodo);
        
            
//         });
       
//      }
     
//      function anyadirProductoAlCarrito(e) {
//         // Anyadimos el Nodo a nuestro carrito
//         carrito.push(e.target.getAttribute('marcador'))
//         // Actualizamos el carrito 
//         renderizarCarrito();
//         // Actualizamos el LocalStorage
//         guardarCarritoEnLocalStorage();
//     }

//     function renderizarCarrito(){

//         DOMcarrito.innerText = '';

//         const carritoSinDuplicados = [...new Set(carrito)];

//         carritoSinDuplicados.forEach((item)=>{
            
//             const miItem = listaDeCervezas.filter((itemBaseDatos) => {

//                 return itemBaseDatos.id === parseInt(item);
//             });
             
//              const numeroUnidadesItem = carrito.reduce((total, itemId) => {
              
//                 return itemId === item ? total += 1 : total;
//             }, 0);
            
//             // Creo el nodo del item del carrito
//             const miNodo = document.createElement('li');
//             miNodo.classList.add('list-group-item', 'text-right', 'mx-1');
//             miNodo.innerText = `${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].precio}`;
          
//             const miBoton = document.createElement('button');
//             miBoton.classList.add('btn', 'btn-danger', 'mx-1');
//             miBoton.innerText = 'X';
//             miBoton.style.marginLeft = '1rem';
//             miBoton.dataset.item = item;
//             miBoton.addEventListener('click', borrarItemCarrito);
           
//             miNodo.appendChild(miBoton);
//             DOMcarrito.appendChild(miNodo);
//         });
        
//         DOMtotal.innerText = calcularTotal();
//     }


//     function borrarItemCarrito(e) {
//         // Obtenemos el producto ID que hay en el boton pulsado
//         const id = e.target.dataset.item;
//         // Borramos todos los productos
//         carrito = carrito.filter((carritoId) => {
//             return carritoId !== id;
//         });
//         // volvemos a renderizar
//         renderizarCarrito();
//         // Actualizamos el LocalStorage
//         guardarCarritoEnLocalStorage();

//     }

//     function calcularTotal() {
//         // Recorremos el array del carrito 
//         return carrito.reduce((total, item) => {
//             // De cada elemento obtenemos su precio
//             const miItem = listaDeCervezas.filter((itemBaseDatos) => {
//                 return itemBaseDatos.id === parseInt(item);
//             });
//             // Los sumamos al total
//             return total + miItem[0].precio;
//         }, 0).toFixed(2);
//     }

//     function vaciarCarrito() {
//         // Limpiamos los productos guardados
//         carrito = [];
//         // Renderizamos los cambios
//         renderizarCarrito();
//         // Borra LocalStorage
//         localStorage.removeItem('carrito');

//     }

//     function guardarCarritoEnLocalStorage () {
//         localStorage.setItem('carrito', JSON.stringify(carrito));
//     }

//     function cargarCarritoDeLocalStorage () {
//         // ¿Existe un carrito previo guardado en LocalStorage?
//         if (localStorage.getItem('carrito') !== null) {
//             // Carga la información
//             carrito = JSON.parse(localStorage.getItem('carrito'));
//         }
//     }

//     // Eventos
//     DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    
    
//     cargarCarritoDeLocalStorage();
//     renderizarProductos();
//     renderizarCarrito();
});















