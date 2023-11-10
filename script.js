function comparar(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let numero3 = parseFloat(document.getElementById('numero3').value);

    //Valor máximo e valor mínimo
    let maximo = Math.max(numero1, numero2, numero3);
    let minimo = Math.min(numero1, numero2, numero3);
    
    //Números iguais
    let igual
    if (numero1 == numero2 && numero1 == numero3) {
        igual = "Número 1, número 2 e número 3 são iguais.";
      } 
      else if (numero1 == numero2) {
        igual = "Número 1 e número 2 são iguais.";
      }
      else if (numero1 == numero3) {
        igual = "Número 1 e número 3 são iguais.";
      } 
      else if (numero2 == numero3) {
        igual = "Número 2 e número 3 são iguais.";
      } 
      else {
        igual = "Não existem números iguais."
    }
    
    //Verificador de valores
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
       alert("Por favor preencha todos os campos.");
      return;
  }
  
  
  //Comparador HTML
  document.getElementById('outputHTML').innerHTML = `
  <p>Maior número = ${maximo}</p>
  <p>Menor número = ${minimo}</p>
  <p>Números iguais  = ${igual}</p>
  `;  
  }