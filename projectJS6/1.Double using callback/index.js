let arr=[1,2,3,4,5,6,7,8,9,10];
function double(a){
    return a*2;
}

function callback(arr,double){
  let one = new Array();
  for(let i=0;i<arr.length;i++){
    one.push(double(arr[i]));
  }
  return one;
}

let output= callback(arr,double);
console.log(output);