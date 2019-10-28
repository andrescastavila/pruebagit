let readlineSync=require("readline-sync");

let num1=readlineSync.questionInt("Dime el primer num")
let num2=readlineSync.questionInt("dime el segundo num");
let num3=0;
let resultado;

for(let i=0;i<num2;i++){
    num3=num3 +num2;
    console.log(num1+"+");

}

resultado=num1*num2;
console.log(resultado);