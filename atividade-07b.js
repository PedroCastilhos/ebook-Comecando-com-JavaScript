// Objetivo
// Estrutura de decisão If 
// Estrutura de cesião Switch

// var numero = prompt("Digite um número entre 1 e 3", "Digite aqui")
// switch(numero){
//   case"1":
//   console.log("Número 1");
//   break;
//   case"2":
//   console.log("Número 2");
//   break;
//   case"3":
//   console.log("Número 3");
//   break;
//   default:
//     console.log("Opção Inválida")
//     break; 
// }

var data = new Date()
var mes = data.getMonth()
var mesPorExtenso

switch(mes){
  case 1:
    mesPorExtenso = "Janeiro";
    break;
  case 2:
    mesPorExtenso = "Fevereiro";
    break;
  case 3:
    mesPorExtenso = "Maio";
    break;
  case 4:
    mesPorExtenso = "Abril";
    break;
  case 5:
    mesPorExtenso = "Março"
    break;
  case 6:
    mesPorExtenso = "Junho"
    break;
  case 7:
    mesPorExtenso = "Julho"
    break;
  case 8:
    mesPorExtenso = "Agosto"
    break;
  case 9:
    mesPorExtenso = "Setembro"
    break;
  case 10:
    mesPorExtenso = "Outubro"
    break;
  case 11:
    mesPorExtenso = "Novembro"
    break;
  default:
    mesPorExtenso = "Dezembro"
    break;
}

  console.log(`O mês atual é ${mesPorExtenso}.`)