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
