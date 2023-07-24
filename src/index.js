import validator from './validator.js';

const buttonOnePag1 = document.querySelector('.btn1')
const informsPag1 = document.querySelector('.container-one')
const informsPag2 = document.querySelector('.container-two')
const buttonReturnMenuOne = document.querySelector('.return-menu-one')
const buttonFivePag1 = document.querySelector('.btn5')
const informsPag3 = document.querySelector('.container-three')
const buttonValidation = document.querySelector('.validation')
const informsPag4 = document.querySelector('.container-for')
const buttonReturnMenuTwo = document.querySelector('.return-menu-two')
const idNumberCard = document.getElementById('inputNumbers')
const idName = document.getElementById('inputName')
const idExpiration = document.getElementById('inputExpiration')
const idCodeCard = document.getElementById('inputCodeCard')
const formOne = document.getElementById('cred-card-one')
const formTwo = document.getElementById('cred-card-two')
const numberCard = document.querySelector('.styleNumberCard')
const nameCardCred = document.querySelector('.nameCard')
const expirationDate = document.querySelector('.expDate')
const securityCode = document.querySelector('.code')

//Funcionalidade dos botões das páginas
buttonOnePag1.addEventListener('click', informStore)
buttonReturnMenuOne.addEventListener('click', returnMenuOne)
buttonFivePag1.addEventListener('click', idCard)
buttonValidation.addEventListener('click', msgValidation)
buttonValidation.addEventListener('click', emptyAlert)
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
function emptyAlert(e) {
  const idNumberCard = document.getElementById('inputNumbers').value
  if (idNumberCard == '') {
    alert('Você precisa digitar um número de cartão!')
    e.stopPropagation()
  } else {

  }
  // console.log(idNumberCard);
}
//Mensagem de validação na pág. 4
// function textResult(){
//   let total = 0;
//   if (total == 0){
//     document.querySelector('.result-text').innerHTML = 'Obaa!! cartão de credito válido!'
//   } else {
//     document.querySelector('.result-text').innerHTML = 'Cartão de credito inválido! :('
// }
// }

//Retornar ao menu a partir da pág. 4 e limpar campos
function returnMenuTwo() {
  informsPag4.classList.add('hide')
  informsPag1.classList.remove('hide')

  idNumberCard.value = '';
  idName.value = '';
  idExpiration.value = '';
  idCodeCard.value = '';
}

//Espelhamento dos dados do input para o cartão de crédito virtual
//Dados do número do cartão de crédito
formOne.inputNumbers.addEventListener('keyup', (e) => {
  let valorInputNumbers = e.target.value;

  formOne.inputNumbers.value = valorInputNumbers.replace(/\D/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
  numberCard.textContent = valorInputNumbers
  
  if (valorInputNumbers == '') {
    numberCard.textContent = '4154 2560 8541 9631';
  }
})
//Dados do nome do cartão de crédito
formOne.inputName.addEventListener('keyup', (e) => {
  let valorInputName = e.target.value;

  formOne.inputName.value = valorInputName
  nameCardCred.textContent = valorInputName

  if (valorInputName == '') {
    nameCardCred.textContent = 'MARIA DA SILVA';
  }
})
//Dados de validade do cartão de crédito
formTwo.inputExpiration.addEventListener('keyup', (e) => {
  let valorInputValid = e.target.value;

  formTwo.inputExpiration.value = valorInputValid
  expirationDate.textContent = valorInputValid

  if (valorInputValid == '') {
    expirationDate.textContent = '06/25';
  }
})
//Dados de segurança do cartão de crédito
formTwo.inputCodeCard.addEventListener('keyup', (e) => {
  let valorInputCode = e.target.value;

  formTwo.inputCodeCard.value = valorInputCode
  securityCode.textContent = valorInputCode

  if (valorInputCode == '') {
    securityCode.textContent = '123';
  }
})


console.log(validator);

