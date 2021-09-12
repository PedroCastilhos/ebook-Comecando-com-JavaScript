//Objetivo:
//Criando funções personalizadas com parâmetros

var classificacao = [];
var filmes = ["Conan", "Harry Potter", "Matrix", "Crepusculo"]

function Classificacao(){
  alert("Informe uma classificação de 1 a 5 estrelas para cada filme");
  for(contador = 0; contador < filmes.length; contador++){
    classificacao[contador] = prompt("Informe a quantidade de estrelas para os filmes", filmes[contador])
  }
}

function ExibirClassificacoes(){
  var numEstrelas = ""
  for(contador = 0; contador < filmes.length; contador++){

  numEstrelas = ""

  for(contadorEstrelas = 1; contadorEstrelas <= classificacao[contador]; contadorEstrelas++){
    numEstrelas += "★"
  }

  console.log(filmes[contador] + "" + numEstrelas + " Estrelas")
 }
}

Classificacao()
ExibirClassificacoes()