// Después de obtener los datos del servidor y hacer las operaciones necesarias
// ...

// Recargar la página
location.reload();

// Insertar los datos en un elemento HTML con un id específico
function mostrarDatosEnPagina(datos) {
  const elementoDatos = document.getElementById('elemento-datos');
  elementoDatos.innerHTML = ''; // Limpiar el contenido anterior si es necesario

  // Recorrer los datos y crear elementos HTML para mostrarlos
  datos.forEach((producto) => {
    const elementoProducto = document.createElement('div');
    elementoProducto.textContent = producto.nombre; // Ejemplo: mostrar solo el nombre del producto

    elementoDatos.appendChild(elementoProducto);
  });
}
