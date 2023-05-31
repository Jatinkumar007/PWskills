let x=5,y=10;

function swap(x,y){
  let z=x;
    x=y;
    y=z;
    return [x,y];
}

console.log(swap(x,y));