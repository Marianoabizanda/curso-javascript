document.addEventListener('DOMContentLoaded', () => {
    let carrito = [];

    const DOMitems = document.getElementById('items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    const listaDeVinos = [
        {
            id: 7,
            nombre: "Alamos-Cabernet",
            precio: 230,
            stock: 300,
            categoria: "vino",
            img: "../images/images vinos/AnyConv.com__0018-ALAMOS-CABERNET-300x300(1).webp"
        },
        {
            id: 8,
            nombre: "Alamos-Chardonnay",
            precio: 250,
            stock: 220 , 
            categoria: "vino",
            img: "../images/images vinos/AnyConv.com__0019-ALAMOS-CHARDONNAY-300x300.webp"
        },
        {
            id: 9,
            nombre: "Alamos- Malbec",
            precio: 240,
            stock: 370,
            categoria: "vino",
            img: "../images/images vinos/AnyConv.com__0020-ALAMOS-MALBEC-300x300.webp"
        },
        {
            id: 10,
            nombre: "Aime Red Blend",
            precio: 270,
            stock: 450,
            categoria: "vino",
            img: "../images/images vinos/AnyConv.com__Aime-Red-Blend-300x300.webp"
        },
        {
            id: 11,
            nombre: "Alambrado- Cabernet",
            precio: 300,
            stock: 400,
            categoria: "vino",
            img: "../images/images vinos/AnyConv.com__Alambrado-Cabernet-Sauvignon-300x300.webp"
        },
        {
            id: 12,
            nombre: "Cafayate",
            precio: 200,
            stock: 305,
            categoria: "vino",
            img: "../images/images vinos/AnyConv.com__Cafayate 3016-300x300.webp"
        },
        
    ]

    



     function renderizarProductos (){

        listaDeVinos.forEach((info) =>{
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');

            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');

            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.innerText = info.nombre;

            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.innerText = `$${info.precio}`;
            //Stock
            const miNodoStock = document.createElement('p');
            miNodoStock.classList.add('card-text');
            miNodoStock.innerText = `Stock: ${info.stock}`;

            const miNodoImagen = document.createElement('img')
            miNodoImagen.classList.add('imagen')
            miNodoImagen.setAttribute('src', info.img);

            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.innerText = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.append(miNodoTitle);
            miNodoCardBody.append(miNodoPrecio);
            miNodoCardBody.append(miNodoStock);
            miNodoCardBody.append(miNodoImagen);
            miNodoCardBody.append(miNodoBoton);
            miNodo.append(miNodoCardBody);
            DOMitems.append(miNodo);
        
            
        });
       
     }
     
     function anyadirProductoAlCarrito(e) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(e.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

        Toastify({
            text: "Se agrego un producto al carrito",
            className: 'btn btn-primary',
            gravity: 'top',
            position: "right",
        }).showToast();
    }

    function renderizarCarrito(){

        DOMcarrito.innerText = '';

        const carritoSinDuplicados = [...new Set(carrito)];

        carritoSinDuplicados.forEach((item)=>{
            
            const miItem = listaDeVinos.filter((itemBaseDatos) => {

                return itemBaseDatos.id === parseInt(item);
            });
             
             const numeroUnidadesItem = carrito.reduce((total, itemId) => {
              
                return itemId === item ? total += 1 : total;
            }, 0);
            
            // Creo el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-1');
            miNodo.innerText = `${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].precio}`;
          
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-1');
            miBoton.innerText = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
           
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        
        DOMtotal.innerText = calcularTotal();
    }


    function borrarItemCarrito(e) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = e.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
       

    }

    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = listaDeVinos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        // Borra LocalStorage
        localStorage.removeItem('carrito');

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Su carrito quedó vacio!',
            timer: 3000
          })

    }

    function guardarCarritoEnLocalStorage () {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (localStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(localStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    
    
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});