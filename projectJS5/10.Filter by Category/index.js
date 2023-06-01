var products = [
    {name: "Shirt",category:"Clothing"},
    {name: "Pants",category:"Clothing"},
    {name: "Hat",category:"Accessories"},
    {name: "Sunglasses",category:"Accessories"}
];

function filterbycategory(products){
  return function fun2(a){
  return products.filter((el)=>{                        //can't use map or foreach over here
       if( el.category==a){
        return el;
       }
    })
    
  }
}

var clothingProudcts = filterbycategory(products)("Clothing");
console.log(clothingProudcts);

