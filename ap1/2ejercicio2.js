let readlineSync=require("readline-sync");

let edad=0;

for(let i=0;i<4;i++){
    edad=readlineSync.questionInt("Dime la edad");
    if(edad>=18){
        console.log("Es mayor de edad");

    }else{
        console.log("Es menor de edad");
    }
}