function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //var url = "http://localhost:8090/platzi-market/api/auth/authenticate";
    var url = "https://platzi-market-production-5706.up.railway.app/platzi-market/api/auth/authenticate/";

    var data = {
        "username": username,
        "password": password
    };

    console.log("User : " + username + " Pass : " + password);

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
        var accessToken = data.jwt;
        sessionStorage.setItem('token', accessToken);

        var baseUrl = window.location.origin;
        window.location.href = baseUrl + "/sites/view-products.html";
    })
    .catch(function(error) {
        console.log(error);
        alert("Error de conexión o credenciales inválidas");
    });
    document.getElementById("login-form").reset();
};
