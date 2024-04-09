//atv 1 // Considere esse array para realizar os próximos exercícios.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Percorra o array imprimindo todos os valores contidos nele com a função console.log().

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    
}


// 2. Some todos os valores contidos no array e imprima o resultado.
//com for of
let sum = 0
for (const number of numbers) {
    sum = sum + number
    //sum += number
}
console.log(sum)

//com for
let summe = 0
for (let index = 0; index < numbers.length; index++) {
    summe = summe + numbers[index];
}
console.log(summe)

// 3. Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let arit = 0
for (const number of numbers) {
    arit = arit + number
}
let result = arit/numbers.length
console.log(result)


// 4. Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
if (result>20) {
    console.log("O valor da média aritmética é maior que 20")
} 
else {
    console.log("O valor da média aritmética é menor ou igual a 20")
}

// 5. Utilizando for, descubra o maior valor contido no array e imprima-o.
let maior = 0
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index]> maior) {
        maior = numbers[index]
    } ;
}
console.log(maior)

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let impares = 0
for (const n of numbers) {
    if (n%2 !== 0) {
        impares ++
    }
}
if (impares>0) {
    console.log(impares)
} else{
    console.log("Nenhum valor ímpar encontrado")
}