let discount=(originalprice,discountedprice)=>{
    let saved=originalprice-discountedprice;
    let percentage=Math.floor((saved*100)/originalprice);
    console.log(`${percentage}%`)
}

discount(250,189)