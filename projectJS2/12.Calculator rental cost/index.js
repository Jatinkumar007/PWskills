function rentalcost(days,type){
    if(type=="Economy"){
        console.log(`The rental costs are: ₹${days*4000}`)
    }
    else if(type=="Midsize"){
        console.log(`The rental costs are: ₹${days*10000}`)
    }
    else if(type=="Luxury"){
        console.log(`The rental costs are: ₹${days*20000}`)
    }
}
rentalcost(20,"Luxury");