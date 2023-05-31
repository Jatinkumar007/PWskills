let arr=[1,2,3,4,5,6,7,8,9,10];

function randomelements(arr){
   [first,second,...last]=arr;
   //console.log(first,second,last)

   return [first,second,last[last.length-1]]
}

console.log(randomelements(arr));