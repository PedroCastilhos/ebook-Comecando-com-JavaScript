// Objetivo:
// Laço de repetição For

var nomes = []
var telefones = []
var cidades = []
var novoContato = "S"
var contador = 0

while(novoContato == "S"){
  nomes[contador] = prompt("Informe o nome")
  telefones[contador] = prompt("Informe o telefone")
  cidades[contador] = prompt("Informe a cidade")
  novoContato = prompt("Cadastrar novo contato? \n[S]im \n[N]ao")
  contador++  

}

for(i = 0; i < nomes.length; i++){
  console.log("------------------------")
  console.log("Nome: ", nomes[i])
  console.log("Telefone: ", telefones[i])
  console.log("Cidade: ", cidades[i])
  console.log("------------------------")
}