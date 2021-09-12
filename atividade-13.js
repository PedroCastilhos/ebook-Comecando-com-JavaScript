// Objetivo:
// Laço de repetição While




  var quantidadeDeNumeros = 0
  var novoNumero = "S"
  var media = 0
  var somaNumeros = 0
  var numero = 0

  while(novoNumero == "S") {
    numero = prompt("Informe um número", "Digite aqui:")
    somaNumeros = Number(somaNumeros) + Number(numero)
    quantidadeDeNumeros = quantidadeDeNumeros + 1
    novoNumero = prompt("Deseja informar mais um número? \n[S]im \n[N]ão")
  }

  media = somaNumeros / quantidadeDeNumeros

  console.log(`A media dos numeros informador é ${media}`)

