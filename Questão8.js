  // Map de funcionários e trazer o nome, salário, desconto
  
  const colaboradorMap = colaborador.map(funcionario => {
    return {
      nome: funcionario.nome,
      salario: funcionario.salario,
      descontos: funcionario.descontos
    };
  });
  
  console.log("Funcionários com nome, salário e desconto:", colaboradorMap);
