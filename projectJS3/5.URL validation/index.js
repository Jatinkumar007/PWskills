let url="https://www.google.com";

function match(url){
    const regex=/^(http:\/\/|https:\/\/)[a-zA-Z0-9!@#$%^&*()_+\-=[\]{}|\\;:'",.<>/?]+(\.[a-zA-Z]+)+$/;
    
    let result=regex.test(url);
    console.log(result)
}

match(url);
