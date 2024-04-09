const carros = ["Mercedes", "Volkswagen", "Audi", "Toyota", "Porsche"]

const carrosM = carros.map(item => item.toUpperCase())

console.log(carrosM)


const numeros = [1, 5, 10, 15]

const numerosQ = numeros.map(item => item ** 2)

console.log(numerosQ)


const numerosM = numeros.map(item => item * 2)

console.log(numerosM)

const carrosID = carros.map((element, index) => index + " " +element)

console.log(carrosID)

const carrosObjeto = carros.map((item, index) => ({
    ID:index,
    carro:item
}) )
console.log(carrosObjeto)


