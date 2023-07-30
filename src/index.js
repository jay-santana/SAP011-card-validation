import validator from './validator.js';

// const buttonOnePag1 = document.querySelector('.btn1')
const informsPag1 = document.querySelector('.container-one')
// const informsPag2 = document.querySelector('.container-two')
// const buttonReturnMenuOne = document.querySelector('.return-menu-one')
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
// buttonOnePag1.addEventListener('click', informStore)
// buttonReturnMenuOne.addEventListener('click', returnMenuOne)
buttonFivePag1.addEventListener('click', idCard)
buttonValidation.addEventListener('click', emptyNumber)
buttonReturnMenuTwo.addEventListener('click', returnMenuTwo)
buttonReturnMenuTwo.addEventListener('click', reset)

//Ir para pág. 2
// function informStore() {
//   informsPag1.classList.add('hide')
//   // informsPag2.classList.remove('hide')
// }

//Retornar ao menu a partir da pág.2
// function returnMenuOne() {
//   informsPag1.classList.remove('hide')
//   // informsPag2.classList.add('hide')
// }

//Ir para a pág. 3
function idCard() {
  informsPag1.classList.add('hide')
  informsPag3.classList.remove('hide')
}

//Mensagem de alerta: número de cartão vazios;
function emptyNumber(e) {
  const idNumberCard = document.getElementById('inputNumbers').value

  if (idNumberCard === '') {
    alert('Você precisa digitar um número de cartão!')
    e.stopPropagation()
  } else {
    const number = idNumberCard.replace(/\D/g, '')
    // const maskNumber = validator.maskify(number)
    // idNumberCard = maskNumber
    validator.maskify(number)
    console.log(validator.maskify)
    finalPag(number)
  }
}

//Ir para a pág. 4 e mensagem de validação do cartão
function finalPag(number) {
  informsPag3.classList.add('hide')
  informsPag4.classList.remove('hide')

  if (validator.isValid(number)){
    document.querySelector('.result-text').innerHTML = ('Obaa!! cartão de crédito válido!')
  } else {
    document.querySelector('.result-text').innerHTML = ('Cartão de crédito inválido! :(')
  }
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

//Reiniciar a página
function reset(){
  location.reload();
}

//Espelhamento dos dados do input para o cartão de crédito virtual
//Dados do número do cartão de crédito
formOne.inputNumbers.addEventListener('keyup', (e) => {
  const valorInputNumbers = e.target.value;

  const maskValue = valorInputNumbers.replace(/\D/g, '').replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
  const maskSpace = maskValue.replace(/\s/g, '')

  formOne.inputNumbers.value = maskValue;
  numberCard.textContent = validator.maskify(maskSpace).replace(/\s/g, '').replace(/([#]{4})/g, '$1 ').trim();
  
  // console.log(numberCard)
  if (valorInputNumbers === '') {
    numberCard.textContent = '4154 2560 8541 9631';
  }
})
//Dados do nome do cartão de crédito
formOne.inputName.addEventListener('keyup', (e) => {
  const valorInputName = e.target.value;

  formOne.inputName.value = valorInputName
  nameCardCred.textContent = valorInputName

  if (valorInputName === '') {
    nameCardCred.textContent = 'MARIA DA SILVA';
  }
})
//Dados de validade do cartão de crédito
formTwo.inputExpiration.addEventListener('keyup', (e) => {
  const valorInputValid = e.target.value;

  formTwo.inputExpiration.value = valorInputValid
  expirationDate.textContent = valorInputValid

  if (valorInputValid === '') {
    expirationDate.textContent = '06/25';
  }
})
//Dados de segurança do cartão de crédito
formTwo.inputCodeCard.addEventListener('keyup', (e) => {
  const valorInputCode = e.target.value;

  formTwo.inputCodeCard.value = valorInputCode.replace(/\D/g, '')
  securityCode.textContent = valorInputCode

  if (valorInputCode === '') {
    securityCode.textContent = '123';
  }
})

// console.log(validator);

