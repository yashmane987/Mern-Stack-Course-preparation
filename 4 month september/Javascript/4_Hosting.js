
// console.log(b)
// var b = 10;
// console.log(c);
// let c = 10;

console.log(d)
const d = 100;



myfunction();
function myfunction(){
    try {
        console.log("normal function we can acces with declaring with top")
    } catch (error) {
        console.log(error)
    }
}


const a = () =>{
    try {
    console.log("We cannot access variable declariation on the top of page")    
    } catch (error) {
          console.log(error)
    }
}

a();
