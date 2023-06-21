function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var url = "https://platzi-market-production-e33b.up.railway.app/platzi-market/api/auth/authenticate";

    var data = {
        username: username,
        password: password
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Origin": "https://platzi-market-production-e33b.up.railway.app"
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
        var accessToken = data.jwt;
        console.log(accessToken);
        sessionStorage.setItem('token', accessToken);

        window.location.href = "view-products.html";
    })
    .catch(function(error) {
        console.log(error);
        alert("Error de conexión o credenciales inválidas");
    });
};
