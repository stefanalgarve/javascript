import { data } from "./product.js";

const divproducts = document.getElementById("div-products");

const divproductsMAP = data.products.map(item => divproducts.innerHTML +=
    `
    <div class="col-4">
    <p>Name: ${item.name}<p>
    <div class="divimg">
    <img class="img-fluid" src="${item.image}">
    </div>
    <p>Price: ${item.price}<p>
    <p>SKU: ${item.SKU}<p>
    <input class="qtd">
    <button class="bntAddicionar">Adicionar</button>
    </div>
 `
)