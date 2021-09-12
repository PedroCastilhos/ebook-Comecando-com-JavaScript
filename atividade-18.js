//  Objetivo:
//  Array
//  Laço de Repetição
//  Estrutura de decisão

  var continuar = "S";
  var animalExibir;
  var animais = new Array(4)

  animais[0] = "Cuidado, a picada de uma radioativda pode te transformar em super-herói"
  animais[1] = "Escorpião é o oitavo signo astrológico do zodíaco"
  animais[2] = "Cobra é uma denominação genérica, utilizada frequentemente na língua portuguesa como sinônimo para serpente."
  animais[3] = "Na linguagem vulgar, chama-se largata ao primeiro estágio larval dos insetos da ordem dos Lepidoptera"

  while(continuar == "S"){
    console.clear();

    animalExibir = prompt("Escolha uma opção abaixo: \n[0]Aranha \n[1]Escorpião \n[2]Cobra \n[3]Lagarta", "Digite aqui")

    switch(animalExibir){
      case"0":
      console.log("Aranha")
      console.log(animais[animalExibir])
      break

      case"1":
      console.log("Escorpião")
      console.log(animais[animalExibir])
      break
      
      case"2":
      console.log("Cobra")
      console.log(animais[animalExibir])
      break

      case"3":
      console.log("Lagarta")
      console.log(animais[animalExibir])
      break

      default:
      console.log("Opção Inválida")
      break;
    }

    continuar = prompt("Deseja ver outro animal [S]im / [N]ão ", "Digite aqui")
  }

  console.clear()
  console.log("Obrigado")

