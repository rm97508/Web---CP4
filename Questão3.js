// Crie uma função tradicional que some A e B e depois faça a divisão por C e apresente agora com o mesmo exemplo crie uma Arrow function para apresentar o mesmo resultado ->
//Tradicional->
function somarDividir(a, b, c) {
  return (a + b) / c;
}
const resultado = somarDividir(39, 25, 4);
console.log(resultado); 

//Arrow function->
const somarDividir = (a, b, c) => (a + b) / c;
const resultado = somarDividir(39, 25, 4);
console.log(resultado); 


