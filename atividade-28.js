// Objetivo:
// Criando funções personalizadas com parâmetros

function operacao(total, porcentagem, operacao){
  var valor_porcentagem = porcentagem/100*total;
  var total_pagar = 0
  if(operacao == "acrescimo"){
    //acréscimo
    total_pagar = total + valor_porcentagem;
  } else {
    //desconto
    total_pagar = total - valor_porcentagem
  }

  console.log("Total a pagar: R$", total_pagar.toFixed(2))

}

operacao(1000, 15, "acrescimo")
operacao(200, 7, "desconto")