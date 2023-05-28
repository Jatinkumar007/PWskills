let capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let small="abcdefghijklmnopqrstuvwxyz";

function check(word){
    let one;
   for(let i=0;i<small.length;i++){
      if(word[0]===small[i]){one=capital.charAt(i)+word.slice(1)};
   }
   (one) ? console.log(one) : console.log(word);
} 

check("jatin");