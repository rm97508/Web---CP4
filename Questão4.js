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
