// Way to find maximum marks
let marks=[45,35,87,62,95];
let max=0;
for(let i of marks){
   (max<i) ? max=i :max=max;
}
console.log(max);