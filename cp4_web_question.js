// Como usar o operador % em JavaScript? Exemplifique e demonstre a saída! ->
let resultado = 89 % 4;
console.log(resultado);

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

//Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou se houve falha de autenticação. Exemplifique e demonstre a saída! ->

const usuario = prompt("Digite seu usuário:");
const senha = prompt("Digite sua senha:");

if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado! Bem-vindo!");
} else {
  console.log("Nome de usuário ou senha incorretos.Por favor tente novamente");
}

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

// Crie uma função tradicional que some A e B e depois faça a divisão por C e apresente agora com o mesmo exemplo crie uma Arrow function para apresentar o mesmo resultado ->
//Tradicional->
function contador() {
    let contador = 0;
  
    document.addEventListener("click", function() {
      contador++;
      console.log("Você clicou " + contador + " vezes.");
    });
  }
  
  contador();
  
//Arrow function->
const contador = () => {
    let contador = 0;
  
    document.addEventListener("click", () => {
      contador++;
      console.log(`Você clicou ${contador} vezes.`);
    });
  }
  
  contador();

// Crie um objeto funcionários crie um array com os atributos nome, idade, sexo, cargo, salário, descontos, data admissão, data demissão a) Fazer o filter de funcionários que tiveram data de admissão entre 2000 à 2010 b) Fazer um filter de funcionários que foram demitidos depois de 2018 c) Fazer um map de funcionários e trazer o nome, salário, desconto d) Criar um Reduce para somar o valor total dos descontos Exemplifique e demonstre a saída ->

const colaborador = [
    {
      nome: "João",
      idade: 35,
      sexo: "Masculino",
      cargo: "Analista",
      salario: 5000,
      descontos: 1000,
      dataAdmissao: "2005-01-01",
      dataDemissao: "2021-04-01"
    },
    {
      nome: "Maria",
      idade: 28,
      sexo: "Feminino",
      cargo: "Coordenadora",
      salario: 8000,
      descontos: 1500,
      dataAdmissao: "2010-05-01",
      dataDemissao: "2022-01-01"
    },
    {
      nome: "Pedro",
      idade: 42,
      sexo: "Masculino",
      cargo: "Gerente",
      salario: 10000,
      descontos: 2000,
      dataAdmissao: "1998-11-01",
      dataDemissao: "2023-06-01"
    }
  ];
  
  const colaboradorAdmissao = colaborador.filter(funcionario => {
    const dataAdmissao = new Date(funcionario.dataAdmissao);
    return dataAdmissao.getFullYear() >= 2000 && dataAdmissao.getFullYear() <= 2010;
  });
  
  console.log("Os colaboradores contratados entre 2000 e 2010 são:", colaboradorAdmissao);
  
  const colaboradorDemissao = colaborador.filter(funcionario => {
    const dataDemissao = new Date(funcionario.dataDemissao);
    return dataDemissao.getFullYear() > 2018;
  });
  
  console.log("colaboradores demitidos depois de 2018:", colaboradorDemissao);
  
  // Map de funcionários e trazer o nome, salário, desconto
  const colaboradorMap = colaborador.map(funcionario => {
    return {
      nome: funcionario.nome,
      salario: funcionario.salario,
      descontos: funcionario.descontos
    };
  });
  
  console.log("Funcionários com nome, salário e desconto:", colaboradorMap);
  
  // Reduce para somar o valor total dos descontos
  const totalDescontos = colaborador.reduce((total, funcionario) => {
    return total + funcionario.descontos;
  }, 0);
  
  console.log("Total de descontos:", totalDescontos);

// Criar um objeto escola e com os atributos curso, aluno, professor, turma, período coloque os valores dos atributos: Exemplifique e demonstre a saída. a) Crie um método tela aluno estudando e apresente na tela b) busque um aluno usando o método find e apresente na tela ->

const escola = {
    curso: 'Administração',
    aluno: [
      { nome: 'Juliana', idade: 34, turma: 'A' },
      { nome: 'Arthur', idade: 18, turma: 'B' },
      { nome: 'Iasmyn', idade: 44, turma: 'C' },
      { nome: 'Ana', idade: 27, turma: 'D' },
    ],
    professor: [
      { nome: 'Bruno', disciplina: 'Contabilidade', turma: 'A', periodo: 'manhã' },
      { nome: 'Ana', disciplina: 'RH', turma: 'B', periodo: 'tarde' },
      { nome: 'Julia', disciplina: 'Administração Financeira', turma: 'C', periodo: 'tarde' },
      { nome: 'Ana Beatriz', disciplina: 'Marketing', turma: 'D', periodo: 'noite' },
    ],
    turma: ['A', 'B','C','D'],
    periodo: ['manhã', 'tarde','noite'],
    
    telaAlunoEstudando: function(aluno) {
      console.log(`O aluno ${aluno.nome} está estudando`);
    }
  }
  
  escola.telaAlunoEstudando(escola.aluno[2]);
  
  const alunoProcurar = escola.aluno.find(function(aluno) {
    return aluno.nome === 'Ana';
  });
  
  console.log(alunoProcurar);
  
  
  

