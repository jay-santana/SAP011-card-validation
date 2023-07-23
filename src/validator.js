const validator = {
  //Algoritmo de Luhn
  isValidCredCard: function(number) { //Passo 1: contar os números do array;
    // const numberDigitsOne = number.length;
    const numberDigits = number.split('').reverse().map(Number) //Passo 4: transformar a string em número;
    let sum = 0

    // console.log(numberDigits);

    //Passo 5: multiplicar os números pares por 2.
    for (let i = 1; i < numberDigits.length; i = i + 2) {
      numberDigits[i] = numberDigits[i] * 2
      //Passo 6: somar o produto dos números do resultado da multiplicação;
      if (numberDigits[i] > 9) {
        numberDigits[i] = numberDigits[i] - 9
      } else {
        numberDigits
      }
    }

    //Passo 7: somar todos os números do array;
    for (let i = 0; i < numberDigits.length; i++) {
      sum = sum + numberDigits[i]
    }
    //Passo 8: verificar se a soma dos dígitos é multiplo de 10;
    //Passo 9: exibir mensagem de validação.
    if (sum % 10 === 0) {
      alert('Obaa!! cartão de crédito válido')
    } else {
      alert('Cartão de crédito inválido :(')
    }
  },

  //Ocultar todos os dígitos do número do cartão, excetuando os últimos 4 caractere
  maskifyCredCard: function(number){
    // const maskifyNumberDigit

  }
}

export default validator;
