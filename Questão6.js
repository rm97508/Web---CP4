//Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou se houve falha de autenticação. Exemplifique e demonstre a saída! ->

const usuario = prompt("Digite seu usuário:");
const senha = prompt("Digite sua senha:");

if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado! Bem-vindo!");
} else {
  console.log("Nome de usuário ou senha incorretos.Por favor tente novamente");
}
