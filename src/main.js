"use strict";
const myObj = {
  name: "cheyun",
  age: 27,
  hasCar: ["toy", "lamborghini", "dream"],
};

for (const x in myObj) {
  console.log(myObj[x]);
}

const person = JSON.stringify(myObj);

const oPerson = JSON.parse(person);

console.log(`This is parse data :`, oPerson);
console.log(`This is stringify data :`, person);
