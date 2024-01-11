const prompt = require('prompt-sync')();

function correct(num1,opeartion,num2) {
    if (opeartion == "+"){
        return num1 + num2;
    }
    else if (opeartion == "-"){
        return num1 - num2;
    }
    else if (opeartion == "*"){
        return num1 * num2;
    }
    else if (opeartion == "/"){
        return num1 / num2;
    }
    else if (opeartion == "**"){
        return num1 ** num2;
    }
    else{
        return "Invalid operation";
    }
}

function incorrect(num1, opeartion, num2){
    if (opeartion == "+"){
        return num1 - num2;
    }
    else if (opeartion == "-"){
        return num1 / num2;
    }
    else if (opeartion == "*"){
        return num1 + num2;
    }
    else if (opeartion == "/"){
        return num1 ** num2;
    }
    else if (opeartion == "**"){
        return num1 * num2;
    }
    else{
        return "Invalid operation";
    }
}

let probability = Math.random()< 0.1
let num1 = Number(prompt("Enter the first number: "));
let opeartion = prompt("Enter the operation: ");
let num2 = Number(prompt("Enter the second number: "));
let correct_answer = correct(num1, opeartion, num2);
let incorrect_answer = incorrect(num1, opeartion, num2);
if (probability == true){
    console.log(num1 + " " + opeartion + " " + num2 + " = " + correct_answer)
}
else if(probability == false){
    console.log(num1 + " " + opeartion + " " + num2 + " = " + incorrect_answer)
}

