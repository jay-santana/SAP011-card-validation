import validator from './validator.js';

// console.log(validator);

const buttonOnePag1 = document.querySelector('.btn1')
const informsPag1 = document.querySelector('.container-one')
const informsPag2 = document.querySelector('.container-two')
const buttonReturnMenuOne = document.querySelector('.return-menu-one')
const buttonFivePag1 = document.querySelector('.btn5')
const informsPag3 = document.querySelector('.container-three')
const buttonValidation = document.querySelector('.validation')
const informsPag4 = document.querySelector('.container-for')
const buttonReturnMenuTwo = document.querySelector('.return-menu-two')
const idNumberCard = document.getElementById('input-numbers')
const idName = document.getElementById('input-name')
const idExpiration = document.getElementById('input-expiration')
const idCodeCard = document.getElementById('input-code-card')




//Funcionalidade dos botões das páginas
buttonOnePag1.addEventListener('click', informStore)
buttonReturnMenuOne.addEventListener('click', returnMenuOne)
buttonFivePag1.addEventListener('click', idCard)
buttonValidation.addEventListener('click', msgValidation)
buttonValidation.addEventListener('click', emptyAlert)
// buttonValidation.addEventListener('click', validator)
buttonReturnMenuTwo.addEventListener('click', returnMenuTwo)

//Ir para pág. 2
function informStore() {
  informsPag1.classList.add('hide')
  informsPag2.classList.remove('hide')
}

//Retornar ao menu a apartir da pág.2
function returnMenuOne() {
  informsPag1.classList.remove('hide')
  informsPag2.classList.add('hide')
}

//Ir para a pág. 3
function idCard() {
  informsPag1.classList.add('hide')
  informsPag3.classList.remove('hide')
}

//Ir para a pág. 4 e capturar apenas números sem espaços e outros caracteres 
function msgValidation(e) {
  informsPag3.classList.add('hide')
  informsPag4.classList.remove('hide')

  e.preventDefault()

  const inputValue = idNumberCard.value
  const number = inputValue.replace(/\D/g, '')
  console.log(number)
  validator.isValidCredCard(number)
}

//Mensagem de alerta: número de cartão vazios;
function emptyAlert(e){
  const idNumberCard = document.getElementById('input-numbers').value
  if (idNumberCard == '') {
    alert('Você precisa digitar um número de cartão!')
    e.stopPropagation()
  } else {

  }
  // console.log(idNumberCard);

}

//Retornar ao menu a partir da pág. 4 e limpar campos
function returnMenuTwo() {
  informsPag4.classList.add('hide')
  informsPag1.classList.remove('hide')

  idNumberCard.value = '';
  idName.value = '';
  idExpiration.value = '';
  idCodeCard.value = '';
}


// validator.isValidCredCard(number)
console.log(validator);

// function validator(){
// const isValid = isValidCreditCard('numbers')
 
// }