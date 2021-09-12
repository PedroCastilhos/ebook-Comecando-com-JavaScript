// Objetivo:
// Array
// Laço de repetição
 
var nomeCurso = prompt("Informe o nome do curso", "Digite aqui")
var codigoCurso = prompt("Informe o codigo do curso", "Digite aqui")
var novoConteudo = "S"
var conteudoTempo = ""
var conteudoCurso= []
var contador = 0

  while (novoConteudo == "S") {
    conteudoTempo = prompt("Informe o conteudo do curso", "Digite aqui")
    conteudoCurso.push(conteudoTempo)

    novoConteudo = prompt("Deseja cadastrar um novo conteúdo para o curso?\n[S]im \n[N]ão", "Digite aqui");
        
  }
  
  console.log();
  console.log("Codigo: ", codigoCurso)
  console.log("Curso ", nomeCurso);
  console.log("Conteudo: ");
  
  while(contador < conteudoCurso.length){
  console.log(conteudoCurso[contador]);
  contador++
  }
