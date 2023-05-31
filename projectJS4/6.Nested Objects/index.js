const person = {
  name: "Mithun",
  age: 21,
  address: {
    street: "B8, Block B, Industrial Area.",
    city: "Sector 62, Noida",
    State: "Uttar Pradesh",
  },
};

function objects(person){
 let {name,address:{street}}=person;
 return {name:name,street:street};
}

console.log(objects(person));

