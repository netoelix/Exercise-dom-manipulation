// Seu código aqui inicio
document.getElementsByTagName('p')[1].textContent = 'Em dois anos eu me vejo trabalhando como pessoa desenvolvedroa full stack';
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76, 164, 109)';
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
document.querySelector('h1').textContent = 'Desafio - JavaScript';

const upperCase = document.getElementsByTagName('p')[0].innerHTML;
const newUpperCase = upperCase.toUpperCase();
document.getElementsByTagName('p')[0].textContent = newUpperCase;

function exibirConteudoTagsP() {
  const tagsP = document.querySelectorAll('.center-content p');
  let conteudo = '';

  for (let index = 0; index < tagsP.length; index += 1) {
    conteudo += `${tagsP[index].textContent} `;
  }

  return conteudo;
}

const conteudoTagsP = exibirConteudoTagsP();
document.querySelector('footer p').textContent = conteudoTagsP;
