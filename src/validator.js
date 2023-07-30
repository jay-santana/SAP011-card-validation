const validator = {
  //Algoritmo de Luhn
  isValid: function(number) { //Passo 1: contar os números do array;
    const numberDigits = number.split('').reverse().map(Number) //Passo 4: transformar a string em número;
    // console.log(numberDigits)
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
    // console.log(sum)

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

    // console.log(typeof maskNumberCard)

    let accumulator = ''

    for(let i = 0; i < maskNumberCard.length; i++) {
      if (i < maskNumberCard.length-4) {
        accumulator = accumulator + '#'
      } else {
        accumulator = accumulator + maskNumberCard[i]
      }
    }
    console.log(accumulator)
    return accumulator
  }
}
export default validator;
