


// // var-

// var is function scope we can use anywere in ConvolverNode
// var we can redeclare and reassign

// // let -

// let is block scope
// we cannot redeclare same variable
// but we can reassign value in let


// // const -

// const is block scope
// we cannot redeclare , reassign value also;




const b = () => {
    try {
     var a=10;
     var a = 20; // redeclare with var variable
     a =45;  //  reasign value 
     console.log(a);

    if(true){
     let d = 10;
         d = 20; //reasign value in let
          console.log(d);
    }
       const e = 10;  //both not happen in const redeclare,reassign
    
       console.log(e);


    } catch (error) {
       console.log(error)
        
    }
}

b();