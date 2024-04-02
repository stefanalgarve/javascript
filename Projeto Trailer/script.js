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

const btns = document.querySelectorAll('.bntAddicionar');
const qtd = document.querySelectorAll('.qtd');

btns.forEach((element, index) => { element.addEventListener('click', () => vendaDeProducts(index)) });
console.log(btns);


const par = document.getElementsByClassName(`p`)

let cal = 10

for (const p of par) {
  p.innerHTML = cal
    cal *= 500
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}