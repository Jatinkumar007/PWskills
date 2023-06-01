class Calculator{

    static add(num1,num2){
        let sum=num1+num2;
        return sum;
    }
}

let result=Calculator.add(5,10);                        //way to pass values to static method;
console.log(result);
