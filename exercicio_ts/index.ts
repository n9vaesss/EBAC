
function multiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicacao(5, 3);
const mensagemSaudacao = saudacao("Maria");

console.log("Resultado da multiplicação:", resultadoMultiplicacao);
console.log("Mensagem de saudação:", mensagemSaudacao);
