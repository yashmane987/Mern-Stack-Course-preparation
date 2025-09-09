//Destructing  object :- 

// Destructuring in JavaScript is a short and easy way to extract values from arrays or objects 
// and assign them to variables.

const user = {
  name: "yash",
  age: "23",
};
const { name, age } = user;

console.log(name, age);

////Destructing array

const arr = [1,2,3,5,6,7];

const [a,b,c,d,e,f] = arr;

console.log(a,b,c,d,e,f);