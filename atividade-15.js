// Objetivo
// Utilizando Array
// Laço de repetição While 


  // const students = ['Maria', 'João', 'Fernando', 'Leonardo', 'Júlia']
  // let counter = 0

  // while (counter <= 4){
  //   console.log(students[counter])
  //   counter++
  // }

  var carros = ["Carro 1", "Carro 2", "Carro 3", "Carro 4", "Carro 5"]
  var contador = 0;

  while(contador <=4){
    carros[contador] = prompt("Informe o modelo do carro nº " + contador + " digite aqui")
    contador++
  }

  contador = 0

  while(contador <=4){
    console.log("Modelo nº", contador + ": ", carros[contador])
    contador++
  }

  console.log(carros)


