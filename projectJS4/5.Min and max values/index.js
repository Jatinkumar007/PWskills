let arr=[1,2,3,4,5,3,4,5,6,7,8,10];

function MinMax(arr){
   let min=Math.min(...arr);
   let max=Math.max(...arr);
   return {max:max,min:min}
}
console.log(MinMax(arr));