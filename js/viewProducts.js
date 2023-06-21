function showProducts() {
  var accessToken = sessionStorage.getItem("token");

  fetch("http://localhost:8090/platzi-market/api/products/all", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error: " + response.status);
      }
    })
    .then(function (data) {
        console.log(data);
      /*
      var productList = document.getElementById("product-list");
      productList.innerHTML = "";
      */
      var productGrid = document.getElementById("products-grid");

      data.forEach(function (product) {
        var productBlock = document.createElement("div");
        productBlock.classList.add("product-block");

        var productName = document.createElement("h3");
        productName.textContent = product.name;

        var productPrice = document.createElement("p");
        productPrice.textContent = "$" + product.price;

        var productStock = document.createElement("p");
        productStock.textContent = "Stock : " + product.stock;

        productBlock.appendChild(productName);
        productBlock.appendChild(productPrice);
        productBlock.appendChild(productStock);

        productGrid.appendChild(productBlock); 
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
