let object={name:"nitin",age:31};

function Robust(obj){

    try{
       if(typeof obj != "object" || obj==null || obj.name==undefined  || obj.age==undefined){
        console.log("Invalid parameter type");
       }
       else{
        console.log(`Name: ${obj.name}, Age: ${obj.age}`);
       }
    }catch(err){
      console.log(err);
    }

}

Robust(object);