let arr=[1,2,3,4,5];

function numberChecker(arr){
    return function secondone(b){
        if(arr.includes(b)){
            return true;
        }
        else{
            return false;
        }
    }
}
const checkNum=numberChecker(arr);
console.log(checkNum(3));
console.log(checkNum(6));

