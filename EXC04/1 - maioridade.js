/*
Verificação de Maioridade: escreva um programa em javaScript que solicita a idade do usuário e verifica se ele é maior de idade (idade igual ou superior a 18 anos).
*/

let idade = prompt("Quantos anos você tem?");

if (idade >= 18){
  // verdadeira
  alert("Maior de idade");
} else {
  // falsa
  alert("Menor de idade");
}