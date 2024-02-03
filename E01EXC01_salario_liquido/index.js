// Etapa 02 - Atividade 01 - Programação Web com JavaScript I

// Desenvolva uma solução em JavaScript que implemente a seguinte questão:

// Exiba o nome e o salário líquido do funcionário através de uma mensagem:
// 'O funcionario xxx recebe um salário líquido de R$yyy.'
// Regra de negocio:
// RN01 - O salário líquido do funcionário é calculado da seguinte forma:
// Salário Líquido = (Salário Bruto + Gratificação - Desconto) * 1.20 + (Ano atual - ano de contratação) * 150
// Exemplo: (1000 + 200 - 300) * 1.20 + (2024 - 2018) * 150 = 900 * 1.20 + 6 * 150 = 1080 + 900 = R$1980

// Especificações:

// Guarde os valores fixos em variáveis
// Faça o usuário digitar as informações necessárias
// Exiba a mensagem tanto no console quanto no browser

let date = new Date();
const prompt = require("prompt-sync")();

console.log("\n")

const nome = prompt("Qual é o seu nome? ")
const anoContratado = parseFloat(prompt("Em que ano você foi contratado? "));
const salarioBruto = parseFloat(prompt("Quanto você ganha de Salário Bruto? "));
const gratificacao = parseFloat(prompt("Quanto você ganha de gratificação? "));
const desconto = parseFloat(prompt("Quanto você ganha de desconto? "));

const salarioLiquido = (salarioBruto + gratificacao - desconto) * 1.20 + (date.getFullYear() - anoContratado) * 150
const salarioLiquidoFormatado = salarioLiquido.toFixed(2)

console.log("\nO(a) funcionario(a) " + nome + " recebe um salário líquido de R$ " + salarioLiquidoFormatado)

console.log("\n")