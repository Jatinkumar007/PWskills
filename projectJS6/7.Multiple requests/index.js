
async function multiple(){
    let one= await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let todos= await one.json();                                                     //here await return also promise

    let two = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let posts= await two.json();

    let obj={
        todo:todos,
        post:posts,
    }

    return obj;
}

multiple().then((data)=>{
    console.log(data);
})