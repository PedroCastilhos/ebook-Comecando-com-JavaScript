var nome = prompt("Informe o nome do candidato", "Digite aqui")
var idade = prompt("Informe a idade do candidato", "Digite aqui")

if (Number(idade) >= 18){
  alert(`O candidato ${nome} está apto à iniciar o processo`)
} else {
  alert(`O candidato ${nome} não está apto à iniciar o processo`)
}