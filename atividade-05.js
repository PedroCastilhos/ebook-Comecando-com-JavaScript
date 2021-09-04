// Objetivo:
// Estrutura de decisão if (se)
// Objeto Date

var dataCompleta = new Date();
var horaAtual = dataCompleta.getHours();

dataCompleta.getDay(); // dia da semana em número 
dataCompleta.getDate(); // dia do mês 
dataCompleta.getMonth(); 
dataCompleta.getFullYear(); 
dataCompleta.getHours(); 
dataCompleta.getMinutes(); 
dataCompleta.getSeconds();

if (horaAtual < 12){
  console.log("Bom dia")
} else if (horaAtual <= 18) {
    console.log("Boa tarde")
}else{
  console.log("Boa noite")
}