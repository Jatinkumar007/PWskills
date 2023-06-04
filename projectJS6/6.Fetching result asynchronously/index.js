//first way
// async function data(){
//        let res= await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
//        let data= await res.json();
//        console.log(data);       
// }
// data();

//second way

async function data(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((data)=>{
        return data.json();
    })
    .then((data2)=>{
        console.log(data2);
    })
    .catch((err)=>{
        console.log(err);
    })
}

data()
