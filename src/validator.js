// const validator = {
//   // ...
// };

// export default validator;

const buttonOnePag1 = document.querySelector('.btn1')
const informsPag1 = document.querySelector('.container-one')
const informsPag2 = document.querySelector('.container-two')
const buttonReturnMenuOne = document.querySelector('.return-menu')
const buttonForPag1 = document.querySelector('.btn5')
const informsPag3 = document.querySelector('.container-three')
const buttonValidation = document.querySelector('.validation')
const informsPag4 = document.querySelector('.container-for')
const buttonReturnMenuTwo = document.querySelector('.return-menu-two')


buttonOnePag1.addEventListener('click', informStore)
buttonReturnMenuOne.addEventListener('click', returnMenuOne)
buttonForPag1.addEventListener('click', idCard)
buttonValidation.addEventListener('click', msgValidation)
buttonReturnMenuTwo.addEventListener('click', returnMenuTwo)


function informStore() {
  informsPag1.classList.add('hide')
  informsPag2.classList.remove('hide')
}

function returnMenuOne() {
  informsPag1.classList.remove('hide')
  informsPag2.classList.add('hide')
}

function idCard() {
  informsPag1.classList.add('hide')
  informsPag3.classList.remove('hide')
}

function msgValidation() {
  informsPag3.classList.add('hide')
  informsPag4.classList.remove('hide')
}

function returnMenuTwo() {
  informsPag4.classList.add('hide')
  informsPag1.classList.remove('hide')
}