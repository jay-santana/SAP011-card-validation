import validator from './validator.js';

const informsPag1 = document.querySelector('.container-one')
const buttonFivePag1 = document.querySelector('.btn5')
const informsPag2 = document.querySelector('.container-two')
const buttonValidation = document.querySelector('.validation')
const informsPag3 = document.querySelector('.container-three')
const buttonReturnMenuTwo = document.querySelector('.return-menu-two')
const idNumberCard = document.getElementById('inputNumbers')
const idName = document.getElementById('inputName')
const idExpiration = document.getElementById('inputExpiration')
const idCodeCard = document.getElementById('inputCodeCard')
const formId = document.getElementById('form-cred-card')
const numberCard = document.querySelector('.styleNumberCard')
const nameCardCred = document.querySelector('.nameCard')
const expirationDate = document.querySelector('.expDate')
const securityCode = document.querySelector('.code')


//Funcionalidade dos botões das páginas
buttonFivePag1.addEventListener('click', idCard)
buttonValidation.addEventListener('click', emptyNumber)
buttonReturnMenuTwo.addEventListener('click', returnMenuTwo)
buttonReturnMenuTwo.addEventListener('click', reset)

//Ir para a pág. 2
function idCard() {
  informsPag1.classList.add('hide')
  informsPag2.classList.remove('hide')
}

//Mensagem de alerta: número de cartão vazios;
function emptyNumber(e) {
  const idNumberCard = document.getElementById('inputNumbers').value

  if (idNumberCard === '') {
    alert('Você precisa digitar um número de cartão!')
    e.stopPropagation()

  } else {
    const number = idNumberCard.replace(/\D/g, '')
 
    validator.maskify(number)
    finalPag(number)
  }
}

//Ir para a pág. 3 e mensagem de validação do cartão
function finalPag(number) {
  informsPag2.classList.add('hide')
  informsPag3.classList.remove('hide')

  if (validator.isValid(number)){
    document.querySelector('.result-text').innerHTML = ('Obaa!! cartão de crédito válido!')
  } else {
    document.querySelector('.result-text').innerHTML = ('Cartão de crédito inválido! :(')
  }
}

//Retornar ao menu a partir da pág. 3 e limpar campos
function returnMenuTwo() {
  informsPag3.classList.add('hide')
  informsPag1.classList.remove('hide')

  idNumberCard.value = '';
  idName.value = '';
  idExpiration.value = '';
  idCodeCard.value = '';
}

//Reiniciar a página
function reset(){
  location.reload();
}

//Espelhamento dos dados do input para o cartão de crédito virtual
//Dados do número do cartão de crédito
formId.inputNumbers.addEventListener('keyup', (e) => {
  const valorInputNumbers = e.target.value;

  const maskValue = valorInputNumbers.replace(/\D/g, '').replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
  const maskSpace = maskValue.replace(/\s/g, '')

  formId.inputNumbers.value = maskValue;
  numberCard.textContent = validator.maskify(maskSpace).replace(/\s/g, '').replace(/([#]{4})/g, '$1 ').trim();
  
  // console.log(numberCard)
  if (valorInputNumbers === '') {
    numberCard.textContent = '4154 2560 8541 9631';
  }
})
//Dados do nome do cartão de crédito
formId.inputName.addEventListener('keyup', (e) => {
  const valorInputName = e.target.value;

  formId.inputName.value = valorInputName
  nameCardCred.textContent = valorInputName

  if (valorInputName === '') {
    nameCardCred.textContent = 'MARIA DA SILVA';
  }
})
//Dados de validade do cartão de crédito
formId.inputExpiration.addEventListener('keyup', (e) => {
  const valorInputValid = e.target.value;

  formId.inputExpiration.value = valorInputValid
  expirationDate.textContent = valorInputValid

  if (valorInputValid === '') {
    expirationDate.textContent = '06/25';
  }
})
//Dados de segurança do cartão de crédito
formId.inputCodeCard.addEventListener('keyup', (e) => {
  const valorInputCode = e.target.value;

  formId.inputCodeCard.value = valorInputCode.replace(/\D/g, '')
  securityCode.textContent = valorInputCode

  if (valorInputCode === '') {
    securityCode.textContent = '123';
  }
})

