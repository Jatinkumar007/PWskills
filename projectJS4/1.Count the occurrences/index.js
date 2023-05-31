let text="hello my name is jatin and i want to be a web developer let's see is it working or not. in spanish hola means hello";
function Count(text){
let map=new Map();
let words=text.trim().split(" ");

for(let i=0;i<words.length;i++){
    if(map.has(words[i])){
        map.set(words[i],map.get(words[i])+1)
    }
    else{
        map.set(words[i],1)
    }
}

console.log(map);
}
Count(text);