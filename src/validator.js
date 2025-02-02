const validator = {
  //Algoritmo de Luhn
  isValid: function(number) { //Passo 1: contar os números do array;
    const numberDigits = number.split('').reverse().map(Number) 
    //Passo 2: criar um array de uma string; 
    //Passo 3: transformar a string em número; 
    //Passo 4: reverter array;
    
    let sum = 0

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
      return(true)
    } else {
      return(false)  
    }
    
  },
 
  maskify: function(number){
    const maskNumberCard = number.toString()

    let accumulator = ''

    for(let i = 0; i < maskNumberCard.length; i++) {
      if (i < maskNumberCard.length-4) {
        accumulator = accumulator + '#'
      } else {
        accumulator = accumulator + maskNumberCard[i]
      }
    }
    return accumulator
  }
}
export default validator;
