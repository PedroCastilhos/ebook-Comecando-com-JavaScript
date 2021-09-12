// Objetivo:
// Craindo funções personalizadas

// function multiplicacao(){
//   var resultado = 0
//   var n1 = promot("Informe o primeiro numero", "Digite aqui!")
//   var n2 = prompt("Informe o segundo numero", "Digite aqui")
//   resultado = n1*n2
//   document.write("O resultado é" + resultado)
// }

function Media(){
  var media = 0, nota = 0, contador = 0
  var nome = prompt("Informe o nome do aluno", "Digite aqui")
  while(contador < 4){
    nota = prompt("Informe a nota do aluno", "Digite aqui")
    if(isNaN(nota)){
      alert("Voce não digitou um número válido")
    } else{
      media = Number(media) + Number(nota);
      contador++
    }
  }
  
  media = media / 4
  
  document.write("A média de ", nome)
  document.write("<br>")
  document.write(" é ", media.toFixed(1))
}