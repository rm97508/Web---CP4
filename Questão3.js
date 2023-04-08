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
