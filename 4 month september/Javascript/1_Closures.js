// var= [function scope we can access anywher in code , inside if also]
// let =[block scope only we van acces in their scope , inside block only]
// const =  [block scope we can acces in their scope , but never reasign const variable]

function firstFunction() {
  const name = "Yash";

  function secondFunction() {
   const surname = "mane"
   var number = 20;

   if(true){
    var finalnumber=100;    //only var we can acces in curly brakets.
    const a = 10;
   }
console.log(finalnumber,'finalnuber')
    console.log(name,surname);
    // console.log(a);
  }

//   console.log(surname,'surname')
    console.log(name,'name')
    // console.log(number,"number")
    console.log(a)

secondFunction()
}

firstFunction()