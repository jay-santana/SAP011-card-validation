const validator = {
  // ...
};

export default validator;

const buttonOneFirstPag = document.querySelector('.button-menu-container')


buttonOneFirstPag.addEventListener('click', informStore)

function informStore() {
  buttonOneFirstPag.classList.add('hide')
}
