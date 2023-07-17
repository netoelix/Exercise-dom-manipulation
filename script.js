// Seu código aqui inicio
document.getElementsByTagName('p')[1].textContent = 'Em dois anos eu me vejo trabalhando como pessoa desenvolvedroa full stack';
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76, 164, 109)';
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
document.querySelector('h1').textContent = 'Desafio - JavaScript';

let upperCase = document.getElementsByTagName('p')[0].innerHTML;
let newUpperCase = upperCase.toUpperCase();
document.getElementsByTagName('p')[0].textContent = newUpperCase;