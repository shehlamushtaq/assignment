// calculator=============================

// var first =parseInt( prompt(`ENTER YOUR FIRST NUMBER`));
// var second  = parseInt( prompt(`ENTER YOUR SECOND NUMBER`));
// var operation  = prompt(`ENTER YOUR OPERATOR`);

// function calculation (num1, num2, operation) {
//     if (operation == "+") {                        
//         var addition = (num1+num2);
//         return addition 
//     } else if (operation == "-") {
//         var subtract = (num1-num2);
//         return subtract   
//     } else if (operation == "*") {
//         var multiply = (num1*num2);
//         return multiply
//     } else if (operation == "/") {
//         var division = (num1/num2);
//         return division
//     } else if (operation == "%") {
//         var remainder = num1%num2        
//         return remainder
//     }
  
// }

// var result = calculation(first , second , operation);
// var resultString = `${first} ${operation} ${second} = ${result}`;
// document.write(resultString);

//===================================================================================
// City Enterence
//========================================================

// var cityName = prompt(`What is your city name?
// "Karachi" "Lahore" or "Quetta"`)

// var msg = cityGreetings(cityName)
// document.write(msg)

// function cityGreetings (name){

//     name = name.toLowerCase()

//     switch (name){

//         case "karachi": {
//             return (`Welcome to city of lights "Karachi"`)
//         }

//         case "lahore": {
//             return (`Welcome to historical city "Lahore"`)
//         }

//         case "quetta": {
//             return (`Welcome to cold city "Quetta"`)
//         }

//     }
// }

//=============================op operators==========================


var a , b, result;

a = 2
b = 1
document.write(` value of a =  ${a} 
value of a =  ${b}`);

result = --a - --b + ++b + b--; 
document.write(`complete result =  ${result}
First Step = --a; = ${--a}
second step = --a - --b = ${--a - --b}`)























