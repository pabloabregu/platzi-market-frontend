
var dataProducts = null;

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var url = "http://localhost:8090/platzi-market/api/auth/authenticate";

    var data = {
        username: username,
        password: password
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error: " + response.status);
        }
    })
    .then(function(data) {
        // Aquí puedes manejar la respuesta del servidor, como guardar el token en el almacenamiento local (localStorage)
        // o redirigir a otra página
        console.log(data.jwt); // Muestra la respuesta en la consola
        var accessToken = data.jwt;
        console.log("Data = " + accessToken);
        //alert("Inicio de sesión exitoso"); // Muestra un mensaje de éxito
        fetch('http://localhost:8090/platzi-market/api/products/all', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        .then(function(response) {
            if (response.ok) {
                localStorage.setItem("products", response.json);
                return response.json();
            } else {
                throw new Error('Error: ' + response.status);
            }
        })
        .then(function(data) {
            window.location.href = "sites/products.html";
            // Mostrar los productos en la consola
            console.log(data);

            var products = localStorage.getItem('products');
            console.log(products);


            /*

            // Obtener el contenedor de la lista de productos
            var productList = document.getElementById("product-list");
            // Limpiar la lista de productos antes de agregar los nuevos elementos
            productList.innerHTML = "";

            // Recorrer los productos y construir el HTML
            data.forEach(function(product) {
                var listItem = document.createElement("li");
                listItem.textContent = product.name;
          
                productList.appendChild(listItem);
            });*/
        })
        .catch(function(error) {
            console.log(error);
        });
    })
    .catch(function(error) {
        console.log(error);
        alert("Error de conexión o credenciales inválidas"); // Muestra un mensaje de error
    });
});
