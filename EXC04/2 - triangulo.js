/*
Verificação de Triângulo: escreva um programa em javaScript que solicita os comprimentos dos lados de um triângulo e verifica se é equilátero, isósceles ou escaleno.

Um triângulo é chamado de equilátero se todos os lados possuem a mesma medida. Um triângulo é chamado de isósceles se dois lados possuem a mesma medida. Um triângulo é chamado de escaleno se todos os lados possuem medidas diferentes.
*/

let comp1 = 1;
let comp2 = 4;
let comp3 = 1;

if (comp1 == comp2 && comp2 == comp3) {
    console.log("O triângulo é equilátero");
} else if ((comp1 != comp2 & comp1 != comp3) || (comp2 != comp3)) { 
  console.log("O triângulo é escaleno");
} else {
  console.log("O triangulo é isósceles")
}




// else if  ( (comp1 == comp2 && comp1 != comp3) || (comp1 == comp3) || (comp2 == comp3)) {
  // console.log("O triangulo é isósceles")
// } else { }

// operador "==" é de comparação"
// operador "&&" é de "e" (and)
// operador "===" é de comparação estrita.
// operador "&" é de "bitwise and" (bit a bit). De forma mais detalhada, ele compara os bits de cada número e retorna um novo número com os bits que são 1 em ambos os números. Por exemplo, 5 & 3 é 1, porque 5 é 101 em binário e 3 é 011. Então, 5 & 3 é 001, que é 1 em decimal.