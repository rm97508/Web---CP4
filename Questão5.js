// Criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado. Considere que a média mínima para aprovação é 6. Exemplifique e demonstre a saída! ->

const nt1 = parseFloat(prompt("Digite a sua nota 1:"));
const nt2 = parseFloat(prompt("Digite a sua nota 2:"));
const nt3 = parseFloat(prompt("Digite a sua nota 3:"));
const nt4 = parseFloat(prompt("Digite a sua nota 4:"));
const nt5 = parseFloat(prompt("Digite a sua nota 5:"));
const nt6 = parseFloat(prompt("Digite a sua nota 6:"));
const nt7 = parseFloat(prompt("Digite a sua nota 7:"));

const media = (nt1 + nt2 + nt3 + nt4 + nt5 + nt6 + nt7) / 7;

if (media >= 6) {
  console.log("Parabéns! Você foi aprovado.");
} else {
  console.log("Infelizmente você foi reprovado.");
}
