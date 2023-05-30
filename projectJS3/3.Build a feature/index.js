let list = [
  { name: "bag", price: "115USD" },
  { name: "yart", price: "2500USD" },
  { name: "house", price: "22300USD" },
  { name: "bike", price: "500USD" },
  { name: "car", price: "650USD" },
  { name: "ipad", price: "120USD" },
  { name: "iphone", price: "200USD" },
];

list=list.map((item)=>{
   let a=item.price.trim().split("USD");
   let b=Number(a[0]*80)+"INR";
   item.price=b;
   return item;
})

console.log(list);