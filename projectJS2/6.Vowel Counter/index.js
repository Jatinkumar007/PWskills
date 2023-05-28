function countvowel(name){
    let vowel="aeiou";
    let count=0;
    for(let i of name){
        for(let j of vowel){
            if(i==j){
                count++;
            }
        }
    }
    console.log(count);
}

countvowel("shivani");