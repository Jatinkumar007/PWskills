function RandomNumber(){
   let num=0;
   let time=3000;
   
   let id=setInterval(() => {
    console.log(`Remaining Time is :- ${time}m/s`)
    time-=1000;
   },1000);

   setTimeout(()=>{
        clearInterval(id);
        num=Math.floor(Math.random()*100);
        console.log(num);
    },time)
}
RandomNumber();
