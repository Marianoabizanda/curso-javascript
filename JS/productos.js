document.addEventListener('DOMContentLoaded', () => {

    
    const DOMitems = document.getElementById("items");
    const DOMcarrito = document.getElementById('carrito');
    const DOMbotonVaciar = document.getElementById("boton-vaciar");
    const DOMtotal = document.querySelector('#total');
    const botonPedir = document.getElementById("boton-comprar");
    carrito = [];

      


        async function listaDeProductos() {
            const resp = await fetch("../productos.json")
            const data = await resp.json()
            listaDeProductos = data;
            renderizarProductos();
        }
    
        listaDeProductos()  



    function renderizarProductos (){

        listaDeProductos.forEach((info) =>{
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
            text: "Se agregó un producto al carrito",
            className: 'btn btn-primary',
            gravity: 'top',
            position: "right",
        }).showToast();
    }
    
    

    function renderizarCarrito(){

        DOMcarrito.innerText = '';

        const carritoSinDuplicados = [...new Set(carrito)];

        carritoSinDuplicados.forEach((item)=>{
            
            const miItem = listaDeProductos.filter((itemBaseDatos) => {

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







    // filtro --------------------------------------------------------------------------------

    let botonCervezas = document.getElementById("botonCervezas")
    let botonVinos = document.getElementById("botonVinos") 

    botonCervezas.addEventListener("click", function () {
        filtrarCategoria("cerveza")
      })
    botonVinos.addEventListener("click", function () {
        filtrarCategoria("vino")
      })

    function filtrarCategoria(categoria) {
        let lista = listaDeProductos.filter((producto) => producto.categoria == categoria)
        listaDeProductos.innerHTML = ""
        render(lista)
      }    
    
    //   ---------------------------------------------------------------------------------------








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
            const miItem = listaDeProductos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    function vaciarCarrito() {
        Swal.fire({
            title: 'Quieres vaciar tu carrito?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Conservar',
            denyButtonText: `Eliminar`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Buena elección!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Tu carrito quedó vacio!', '', 'info');

                // Borramos todos los productos

                // Limpiamos los productos guardados
                carrito = [];
                // Renderizamos los cambios
                renderizarCarrito();
                // Borra LocalStorage
                localStorage.removeItem('carrito');
                localStorage.clear();
                //borro del storage tambien
            }
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

    const realizarPedido = ({
        value: email
    }) => {
        (async () => {

            const {
                value: email
            } = await Swal.fire({
                title: 'Te enviaremos el Link de pago',
                input: 'email',
                inputLabel: 'Ingresa tu email',
                inputPlaceholder: 'Email'
            })

            if (email) {
                Swal.fire(`Finaliza tu compra ingresando a: ${email}`)
            }
              // Limpiamos los productos guardados
              carrito = [];
              // Renderizamos los cambios
              renderizarCarrito();
              // Borra LocalStorage
              localStorage.removeItem('carrito');
              localStorage.clear();
           
        })()
    }

    // Eventos

    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    botonPedir.addEventListener("click", realizarPedido);


    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();

    })







    
    


































    
















