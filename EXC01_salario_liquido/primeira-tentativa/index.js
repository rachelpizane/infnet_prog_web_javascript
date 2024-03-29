// // Exercício 01 - Etapa 01 - 02 - Programação Web com JavaScript I

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

// OBS: Nessa primeira tentativa eu fiz o exercicio pelo node.js. Nesse caso a minha visualização era somente pelo console.


const prompt = require("prompt-sync")();

console.log("\n")

var nome = prompt("Qual é o seu nome? ")

var anoContratado = parseFloat(prompt("Em que ano você foi contratado? "));
var salarioBruto = parseFloat(prompt("Quanto você ganha de Salário Bruto? "));
var gratificacao = parseFloat(prompt("Quanto você ganha de gratificação? "));
var desconto = parseFloat(prompt("Quanto você ganha de desconto? "));

const anoAtual = new Date().getFullYear();
const indice = 1.20;
const taxaAdministrativa = 150;

var salarioLiquido = (salarioBruto + gratificacao - desconto) * indice + (anoAtual - anoContratado) * taxaAdministrativa
var salarioLiquidoFormatado = salarioLiquido.toFixed(2)

console.log("\nO(a) funcionario(a) " + nome + " recebe um salário líquido de R$ " + salarioLiquidoFormatado + ".")

console.log("\n")