let salario = 999;

idade = 80;

if (salario >= 1000){
  alert("Rica");
} else {
  alert("Pobre");
}

let oStatus = 0;
let aSituacao = 0;

if (salario >= 1000){
  oStatus = "Rica";
} else if (salario < 500) { 
    oStatus = "Pobre";
} else {
    oStatus = "Classe média";
}

alert(oStatus);

aSituacao = 0;
aSituação = idade > 70 ? "velhinha" : "novinha";
console.log(aSituacao);

