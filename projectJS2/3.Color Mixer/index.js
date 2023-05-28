// **********************First way***********************************
// function colormixer(color1,color2){
//     switch(color1+","+color2){
//         case "red,blue" : console.log("purple");
//         break;

//         case "red,yellow": console.log("orange");
//         break;

//         case "blue,yellow": console.log("green");
//         break;

//         default : console.log("Invalid color combination");
//         break;
//     }
// }

// colormixer("blue","yellow");


// **********************Second way***********************************
function colormixer(color1,color2){
    switch(color1){
        case "red":
            switch(color2){
                case "blue" : console.log("purple");
                break;

                case "yellow" : console.log("orange");
                break;

                default : console.log("Invalid color combination");
                break;
            }
            break;
        case "blue":
            switch(color2){
                case "yellow" : console.log("green");
                break;

                default : console.log("Invalid color combination");
                break;
            }
            break;
        default : console.log("Invalid color combination");
        break;    
    }
}

colormixer("yellow","red");