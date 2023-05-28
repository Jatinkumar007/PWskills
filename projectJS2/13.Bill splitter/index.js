function billsplitter(tables,people){
    let total=0;
    let split=0;
    for(let i of tables){
        total+=i;
    }
    split=total/people;

    return {"total bill":`₹${total}`,"bill to be paid by each person":`₹${split}`};
}

let a=billsplitter([10,20,30,15],4);
console.log(a);