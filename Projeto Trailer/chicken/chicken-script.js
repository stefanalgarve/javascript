import { chickendata } from "./chicken-data.js";

const chickenID = document.getElementById('chicken');

const chickenMAP = chickendata.meals.map(item => chickenID.innerHTML +=
  `
  <div class="col-4">
  <p>Name: ${item.strMeal}<p>
  <div class="divimg">
  <img class="img-fluid" src="${item.strMealThumb}">
  </div>
  <p>idMeal: ${item.idMeal}<p> 
  </div>
`
)

const par = document.getElementsByClassName(`p`)

let cal = 10

for (const p of par) {
  p.innerHTML = cal
  cal *= 500
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];

}