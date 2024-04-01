
letra = prompt("Escolha uma letra:")
if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    console.log(`A letra ${letra} é uma vogal`)
} else if(letra >= "a" && letra <= "z"){
    console.log(`A letra ${letra} é uma consoante`)
} else {
    console.log("Por favor, digite uma letra válida do alfabeto.");
}

