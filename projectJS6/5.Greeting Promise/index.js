
function Greeting(name){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(name){
                resolve(name);
            }else{
                reject(`error`);
            }
        },2000);
    })
    return p;
}

Greeting("Jatin")
.then((name)=>{
    console.log(`Hello ${name}`);
})
.catch((err)=>{
    console.log(err)
})

