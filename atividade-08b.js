// Objetivo
// Estrutura de decisão switch(caso)

var numero1 = prompt("Informe o primeiro número", "Digite aqui");
var numero2 = prompt("Informe o segundo número", "Digite aqui")
var operacao = prompt("Informe o operador: \nAdicição (+) \nSubtração (-) \nMultiplicação (*) \nDivisão(/) \nResto de uma divisão (%) \nExponenciação (**)", "Digite aqui")

switch (operacao) {
  case "+":
    resultado = Number(numero1 + numero2)    
    break;
  case "-":
    resultado = Number(numero1 - numero2)    
    break;
  case "*":
    resultado = Number(numero1 * numero2)    
    break;
  case "/":
    resultado = Number(numero1 / numero2)    
    break;
  case "%":
      resultado = Number(numero1 % numero2)    
      break;
  case "**":
      resultado = Number(numero1 ** numero2)    
      break;  
  default:
    alert("Operação inválida")
    break;
}

console.log(`O resultado é ${resultado}`)