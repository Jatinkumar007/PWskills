let price=(cart)=>{
    let total=0;
    for(let i=0;i<cart.length;i++){
        total+=cart[i].unit*cart[i].quantity;
    }
    console.log('₹',total)
}

price([{"unit":25,"quantity":4},{"unit":20,"quantity":2},{"unit":30,"quantity":5},{"unit":21,"quantity":6}]);