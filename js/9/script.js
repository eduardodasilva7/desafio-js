

let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação matemática desejada (+, -, *, /):");

let resultado;

switch (operacao) {
    case '+':
        resultado = n1 + n2;
        break;
    case '-':
        resultado = n1 - n2;
        break;
    case '*':
        resultado = n1 * n2;
        break;
    case '/':
        if (numero2 !== 0) {
            resultado = n1 / n2;
        } else {
            console.log("Erro: Divisão por zero.");
        }
        break;
    default:
        console.log("Operação inválida.");
}

if (resultado !== undefined) {
    console.log("Resultado da operação " + n1 + operacao + n2 + ": " + resultado);
}



