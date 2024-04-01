let numero;
numero = prompt("Digite um número:");
numero = parseInt(numero);

let contador = 1;
do {
   
    let resultado = numero * contador;
    
  
    console.log(numero + " x " + contador + " = " + resultado);

   
    contador++;
} while (contador <= 10);

