const carros = ["Mercedes", "Volkswagen", "Audi", "Toyota", "Porsche"]

const carrosMercedes = carros.filter(item => item != "Mercedes")

console.log(carrosMercedes)

const carros2 = carros.filter((item, index) => index<2)

console.log(carros2)

const carrosU = carros.filter((item, index) => index>2)

console.log(carrosU)

const carrosUl = carros.filter((item, index) => index === carros.length -1)

console.log(carrosUl)

