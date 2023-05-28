function divisible(num){
    let one=[];
    for(let i=0;i<num.length;i++){
        if(+num[i]%3==0 && +num[i]%2!=0){
            one.push(num[i]);
        }
    }
    console.log("Numbers are divisible by 3,but not by 2 :",one.join(","));
}

divisible([1,2,3,4,5,6,7,8,9,10,15]);