function invertedtriangle(a){
    for(let i=a;i>=0;i--){
        let pattern="";
        for(let j=0;j<i;j++){
            pattern+="*";
        }
        console.log(pattern);
    }
}

invertedtriangle(10);