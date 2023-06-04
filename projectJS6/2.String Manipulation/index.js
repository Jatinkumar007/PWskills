let string="hello, world!";
let logString=(a)=>{
    let str=a.toUpperCase();
    return (`The manipulated string is:${str}`);
}


function manipulateString(string,logString){
     let result = logString(string);
     return result;
}

let b= manipulateString(string,logString);
console.log(b);

