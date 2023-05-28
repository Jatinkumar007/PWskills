// A function which will take 2 numerical values and 1 string value as an argument; 

function Calculator(num1,num2,operator){
    let result=0;
    switch(operator){
        case "+": result=num1+num2;
        break;

        case "-": result=num1-num2;
        break;

        case "*": result=num1*num2;
        break;
        
        case "/": result=num1/num2;
        break;

        default : result="Invalid operator";
        break;
    }
   return result;
}
let a=Calculator(20,5,"#");
console.log(a);