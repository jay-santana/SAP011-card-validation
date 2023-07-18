const validator = {
  // ...
};

export default validator;


//Alerta sobre não poder inserir um campos vazios as informações do usuário 


//Ocultar todos os dígitos do número do cartão, excetuando os últimos 4 caractere

//Algoritmo de Luhn
//Inserir o número que desejamos validar, esse número deve conter 16 dígitos (contendo apenas caracteres numéricos, dígitos de [0-9]); 

//Multiplicar por dois, todos os números que ocupam uma posição par;

//Adicionar os dígitos do resultado para os números maiores ou iguais a 10 (16 => 1 + 6 = 7);

//Verificar a validação do número, o número a verificar será válido se a soma de seus dígitos finais for um múltiplo de 10.

//Exibir mensagem sobre a validação ou invalidação do cartão

const buttonOnePag1 = document.querySelector('.button-menu-container')


buttonOnePag1.addEventListener('click', informStore)

function informStore() {
  buttonOnePag1.classList.add('hide')
}
