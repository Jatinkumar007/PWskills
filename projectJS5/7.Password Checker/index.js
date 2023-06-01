class User{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }

    getPassword(){
        return this.password.replace(/./g, '*');             //it's a way to replace all letters of password to '*' g means globally or all.
    }
    setPassword(pass){
        let check1=false;
        let check2=false;
        let num=pass.trim().split("");
        for(let i=0;i<num.length;i++){
            if(!isNaN(num[i])){
                check1=true;
            }
            if(num[i]==num[i].toUpperCase()){
               check2=true;
            }
        }
        if(pass.length>=8 && check1 && check2){
            this.password=pass;
        }
        else{
            console.log("Password must be at least 8 characters long and contain at least one number and one uppercase letter.")
        }
    }
}

const user = new User("Mithun","Password123");
console.log(user.getPassword());
user.setPassword("myPassword");
user.setPassword("myPassword");
user.setPassword("Mypassword123");
console.log(user.getPassword());