let myString = "a green apple";

const stringArray = myString.split("");

const myArray = [];

for (let i = 0; i < stringArray.length; i++) {
  const element = stringArray[i];
  const item = myArray.find(e=> e.char === element);
  if (item ){
    item.quantity++;
  }else {
    myArray.push({char: element, quantity: 1});
  }
}

const nonRepeating = myArray.find((element)=>element.quantity===1)


console.log(stringArray);

console.log(myArray);


console.log(nonRepeating);

