let input="My calling word is Jatin";

function reverse(input){
    setTimeout(()=>{
        console.log(input.trim().split(" ").reverse().join(" "))          //with the help of reverse() method we can reverse the data.
    },2000)
}

reverse(input);