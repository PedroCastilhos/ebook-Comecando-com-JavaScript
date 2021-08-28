var vendedor,jan, fev, mar, media;
vendedor = prompt("Informe o nome do vendedor ", "Digite aqui ")
jan = prompt("Informe o valor das vendas de Janeiro ", "Digite aqui ")
fev = prompt("Informe o valor das vendas de Fevereiro ", "Digite aqui ")
mar = prompt("Informe o valor das vendas de Março ", "Digite aqui ")

media = ((Number(jan) + Number(fev) + Number(mar)) / 3).toFixed(2)

console.log(`A média de vendas do vendedor no primeiro trimestre foi de ${media}`)
