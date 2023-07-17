const validator = {
  // ...
};

export default validator;

const buttonOnePag1 = document.querySelector('.button-menu-container')


buttonOnePag1.addEventListener('click', informStore)

function informStore() {
  buttonOnePag1.classList.add('hide')
}
