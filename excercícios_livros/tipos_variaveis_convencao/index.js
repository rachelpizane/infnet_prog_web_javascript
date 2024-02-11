// Cap. 02 - JavaScript from Beginner to Professional

// Testes de tipos de variáveis em JavaScript 

let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;

// Practice exercise 2.1

console.log("str = " + typeof(str) + ".")
console.log("nr = " + typeof(nr) + ".")
console.log("bigNr = " + typeof(bigNr) + ".")
console.log("bool = " + typeof(bool) + ".")
console.log("sym = " + typeof(sym) + ".")
console.log("undef = " + typeof(undef) + ".")
console.log("unknown = " + typeof(unknown) + ".\n")

let str1 = 'Laurence'; 
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log("str1 = " + typeof(str1) + ".")
console.log("str2 = " + typeof(str2) + ".")
console.log("val1 = " + typeof(val1) + ".")
console.log("val2 = " + typeof(val2) + ".")
console.log("myNum = " + typeof(myNum) + ".\n")

let nome = "Rachel"
let nomenumb = Number(nome);
let age = "27";
let ageNumb = Number(age);
let booltype = "";
let booltypebol = Boolean(booltype);
let numb = 1000;
let numbstring = String(numb);

console.log(nomenumb + " = " + typeof(nomenumb) + ".");
console.log(ageNumb + " = " + typeof(ageNumb) + ".");
console.log(booltypebol + " = " + typeof(booltypebol) + ".");
console.log(numbstring + " = " + typeof(numbstring) + ".\n");

let stringnumb = "1980.75";
let numstring = Number(stringnumb);
console.log(numstring);