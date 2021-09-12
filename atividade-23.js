// Objetivo:
// Laço de repetição For

var media = 0, nota = 0, contador = 0;
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
document.write(" é ", media.toFixed(1))
