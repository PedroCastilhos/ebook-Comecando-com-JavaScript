// Objetivo
// Estruturação de decisão switch (caso)

var nome = prompt("Qual é o seu nome?", "Digite aqui")
var idade = prompt("Você tem quantos anos?", "Digite aqui")
var continuar = confirm("Deseja salvar o arquivo")

if(continuar == true){
  console.log(`Olá ${nome}, você tem ${idade} anos e a sua operação irá seguir.`)
} else {
  console.log(`Olá ${nome}, você tem ${idade} anos e a sua operação será cancelada.`)
}