// Por id, apenas RESGATA um único ELEMENTO
const skol = document.getElementById('skol');
// Por classe RESGATA vários ELEMENTOS 
const cervejas = document.getElementsByClassName('cerveja');

const maceio = document.querySelector('#maceio');  // FAZ A MESMA COISA PARA O ID
const cidade = document.querySelectorAll('.cidade'); // FAZ A MESMA COISA PARA A CLASS

const btnClick = document.querySelector('#btn-click');
const btnsClick = document.querySelectorAll('.btns-click');

btnClick.addEventListener('click', function () { // Aqui é um função sem NOME
    alert('Estou aqui agora');
});

btnsClick.forEach(element => {
    element.addEventListener('click', () => { // Aqui é uma função sem NOME
        alert('Estou aqui agora 2');
    });
});

// Função sem nome === Função Anônimas

/*
    1 - exemplo: modelo function
    function () {

    };

    2 - exemplo: modelo arrow function
    () => {

    }

*/


