// Array de objetos representando alunos
const alunos = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 8 },
    { nome: "Ana", nota: 6 },
    { nome: "Carlos", nota: 4 }
  ];
  
  // Função para filtrar alunos com nota maior ou igual a 6
  const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);
  
  console.log(alunosAprovados);
  