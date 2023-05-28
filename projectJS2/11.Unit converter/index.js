function Unitconverter(value){
    if(typeof(value)!="number"){value=value.trim().split("°");}
    else{
        value=[value]; //converting a number value into an array;
    }
    console.log((Number(value[0])*9/5 + 32)+"°F");
}

Unitconverter("22°C");