import { data } from "./product.js";


const divProducts = document.getElementById('products');


function vendaDeProducts(product) {
  let venda = 0;
  alert(data.products[product].price * qtd[product].value)
};


for (let index = 0; index < data.products.length; index++) {
  const element = data.products[index];

  divProducts.innerHTML += `
           <div class="col-4">
           <p>Name: ${element.name}<p>
           <div class="divimg">
           <img class="img-fluid" src="${element.image}">
           </div>
           <p>Price: ${element.price}<p>
           <p>SKU: ${element.SKU}<p>
           <input class="qtd">
           <button class="bntAddicionar">Adicionar</button>
           </div>
        `
}