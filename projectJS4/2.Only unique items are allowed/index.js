let arr=[1,2,3,4,5,3,4,5,6,9,8,7,0];

function unique(arr){
  let set = new Set(arr);
  return set;
}

console.log(unique(arr));