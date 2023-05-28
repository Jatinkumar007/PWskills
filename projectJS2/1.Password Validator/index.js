// A Function which will take two values and check whether both are same or not
function password(password,confirmpassword){
    if(password===confirmpassword){
        console.log("Password Matched. Password validation Successful.")
    }
    else{
        console.log("Password didn't match. Password validation unsuccessful")
    };
}

password("Jatin","Jatin");