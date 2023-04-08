// Faça um programa que receba a idade de uma pessoa e exiba uma mensagem indicando em qual faixa etária ela se encontra: criança (até 12 anos), adolescente (entre 13 e 18 anos), adulto (entre 19 e 60 anos) ou idoso (mais de 60 anos). Exemplifique e demonstre a saída!->

const idade = parseInt(prompt("Qual idade você têm?"));

if (idade <= 12) {
  console.log("Você é uma criança. (até 12 anos) ");
} else if (idade <= 18) {
  console.log("Você é um adolescente. (entre 13 e 18 anos)");
} else if (idade <= 60) {
  console.log("Você é um adulto. (entre 19 e 60 anos)");
} else {
  console.log("Você é um idoso. (mais de 60 anos)");
}
