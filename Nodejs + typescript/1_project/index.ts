

// Tempalte Literals

const username : string = 'Saurabh mane'
console.log(`my name is ${username}`)

function myfunction (name="Yash"){
    console.log(`My name is ${name}`)
} 

myfunction();



// spread operator  array and objects 

// ex with array 
const arr :number[] = [10,22,34,45];
const arr1 :number[] =[...arr,55,67,88]
console.log(arr1)





// with the help of interface we can declare datatype of object in array

interface userdetailsinterface  {
    name :string,
    std:number;
}


// ex with object

const userdata : userdetailsinterface = {
    name : "yash",
    std:11
}

const anotheruser ={
    name1:"ketan",
    std1:"9th"
}

const alluser ={
    ...userdata,
    ...anotheruser
}
console.log(alluser)


// Rest Opearter


