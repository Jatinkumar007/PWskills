let string="abcd";

function convertToNumber(string){
  if(!isNaN(string)){                    // isNaN :- it's not a number and !isNaN :- it's a number;
    return +string;
  }
  else{
    return "Invalid Number";
  }
}
console.log(convertToNumber(string))