// Objetivo 
// Laço de repetição While

var nome, nota1, nota2, nota3, nota4, media;

var resposta = true;

while(resposta == true){
    nome = prompt("Informe o nome do aluno(a)", "Digite aqui")
    nota1 = prompt("Informe a nota do 1º bimestre", "Digite aqui")
    nota2 = prompt("Informe a nota do 2º bimestre", "Digite aqui")
    nota3 = prompt("Informe a nota do 3º bimestre", "Digite aqui")
    nota4 = prompt("Informe a nota do 4º bimestre", "Digite aqui")
    media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
    alert("O(A) estudante " + nome + " obteve a média " + media)
    resposta = confirm ("Calcular a média de outro aluno?")
}
