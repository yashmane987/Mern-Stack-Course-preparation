// Synchronus - Javscript code run line by line

// console.log('hello javScript');
// console.log('1')
// console.log('2')
// console.log('3')


// Asynchronus means run code line by line but wait for some time to execute code of specific second then it will run at last in output

// console.log('1');
// setTimeout(()=>{    //Asynchronus operation
// console.log('Run in last ')
// },[1000])
// console.log('2')


// 1- Promises  :  - 
// 2 - async and await :  latest version of promises, it is ascyncronus operation , if we want to to do any db call we can use async and await
// 3 - callback  :   is a function can pass an  argument from one function to another function



//Callback ex

function myfunction(callback){
     callback()
    console.log('Yash');
   
}

function secondfunction(){
    console.log('second function callback')
}
myfunction(secondfunction);



// async and await

const getdata = async  () =>{
    try {
        const Userdata =  await User.find()
    } catch (error) {
        console.log(error)
    }
}