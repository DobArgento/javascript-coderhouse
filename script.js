document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay datos en el Local Storage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
    // Actualizar la lista de productos en el carrito
    actualizarListaCarrito();
  
    // Obtener el campo de entrada, el botón de agregar y el botón de borrar
    const productoInput = document.getElementById('productInput');
    const addButton = document.getElementById('addButton');
    const clearButton = document.getElementById('clearButton');
  
    // Agregar evento al campo de entrada para detectar Enter
    productoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarProducto();
        }
    });
  
    // Agregar evento al botón de agregar para detectar clic
    addButton.addEventListener('click', agregarProducto);
  
    // Agregar evento al botón de borrar para detectar clic
    clearButton.addEventListener('click', confirmarBorrarCarrito);
  
    // Función para agregar un producto al carrito
    function agregarProducto() {
        const producto = productoInput.value.trim();
  
        if (producto !== '') {
            carrito.push(producto);
            actualizarListaCarrito();
            guardarEnLocalStorage();
            productoInput.value = ''; // Limpiar el campo de entrada
        }
    }
  
    // Función para mostrar un mensaje de confirmación antes de borrar el carrito
    function confirmarBorrarCarrito() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario confirma, borrar el carrito
                borrarCarrito();
                // Mostrar mensaje de éxito
                Swal.fire({
                    title: "Deleted!",
                    text: "Your list has been deleted.",
                    icon: "success"
                });
            }
        });
    }
  
    // Función para borrar el carrito
    function borrarCarrito() {
        carrito = [];
        actualizarListaCarrito();
        guardarEnLocalStorage();
    }
  
    // Función para actualizar la lista de productos en el carrito
    function actualizarListaCarrito() {
        const carritoLista = document.getElementById('carritoLista');
        carritoLista.innerHTML = '';
  
        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = producto;
            carritoLista.appendChild(li);
        });
    }
  
    // Función para guardar el carrito en el Local Storage
    function guardarEnLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  });

  