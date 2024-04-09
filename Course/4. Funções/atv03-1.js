// Faça uma função que encontra o índice do maior valor em um array de números.

function getHighestIndex(numbers) {
    let highestIndex = 0;

    for (let index = 0; index < numbers.length; index += 1) {
        if (highestIndex < numbers[index]) {
            highestIndex = numbers[index];
        }
    }

    return highestIndex;
}


console.log(getHighestIndex([20, 3, 5]))
