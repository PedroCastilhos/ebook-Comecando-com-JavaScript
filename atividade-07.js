// Objetivo:
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

var data = new Date();
var diaDaSemana = data.getDay();
var diaDaSemanaExtenso;

switch(diaDaSemana){
  case 1:
    diaDaSemanaExtenso = "Domingo";
    break;
  case 2:
    diaDaSemanaExtenso = "Segunda-Feira";
    break;
  case 3:
    diaDaSemanaExtenso = "Terça-Feira";
    break;
  case 4:
    diaDaSemanaExtenso = "Quarta-Feira";
    break;
  case 5:
    diaDaSemanaExtenso = "Quinta-Feira"
    break;
  case 6:
    diaDaSemanaExtenso = "Sexta-Feira"
    break;
  default:
    diaDaSemanaExtenso = "Sábado"
    break;
}

  console.log(`Hoje é ${diaDaSemanaExtenso}.`)