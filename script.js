// Seu código aqui inicio
const pElements = document.querySelectorAll('.center-content p');
const mainContent = document.querySelector('.main-content');
const centerContent = document.querySelector('.center-content');
const h1Element = document.querySelector('h1');

pElements[1].textContent = 'Em dois anos eu me vejo trabalhando como pessoa desenvolvedora full stack';

mainContent.style.backgroundColor = 'rgb(76, 164, 109)';
centerContent.style.backgroundColor = 'white';

h1Element.textContent = 'Desafio - JavaScript';

const firstParagraph = pElements[0];
firstParagraph.textContent = firstParagraph.textContent.toUpperCase();

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
