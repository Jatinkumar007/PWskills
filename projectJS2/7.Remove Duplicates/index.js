function duplicate(card){
   for(let i=0;i<card.length;i++){
    for(let j=i+1;j<card.length;j++){
        if(card[i]==card[j]){
            card.splice(j,1);
        }
    }
   }
   console.log(card);
}

duplicate(["one","two","three","two","three","four","six","six"])

//Second way

function duplicate2(card){
    let newone= [...new Set(card)]
    console.log(newone)
}

duplicate2(["one","two","three","two","three","four","six","six","nine","nine","nine","ten"])