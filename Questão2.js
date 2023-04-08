// Crie um objeto funcionários crie um array com os atributos nome, idade, sexo, cargo, salário, descontos, data admissão, data demissão a) Fazer o filter de funcionários que tiveram data de admissão entre 2000 à 2010 b) Fazer um filter de funcionários que foram demitidos depois de 2018 c) Fazer um map de funcionários e trazer o nome, salário, desconto d) Criar um Reduce para somar o valor total dos descontos Exemplifique e demonstre a saída ->

const colaborador = [
    {
      nome: "Arthur",
      idade: 23,
      sexo: "Masculino",
      cargo: "Analista",
      salario: 1200,
      descontos: 10,
      dataAdmissao: "2005-01-01",
      dataDemissao: "2021-04-01"
    },
    {
      nome: "Juliana",
      idade: 23,
      sexo: "Feminino",
      cargo: "Coordenadora",
      salario: 10000,
      descontos: 100,
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
