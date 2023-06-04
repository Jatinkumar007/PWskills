let obj={
    firstname:"jatin",
    lastname:"kumar",
    age:"23years"};

let callback=(fullName,personage)=>{
   return (`The person's full name is ${fullName} and their age in days is ${personage}`)
};

function ageinDays(obj,callback){
   let {firstname,lastname,age}=obj;
   let fullName= firstname+" "+lastname;
   let AGE=age.trim().split("years");
   let personage=Number(AGE[0]*365);
   let result = callback(fullName,personage);
   return result;
}

let r=ageinDays(obj,callback);
console.log(r);