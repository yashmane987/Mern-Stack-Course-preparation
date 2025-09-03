
const myfunction =(name = "yash") =>{
    try {
        console.log(`My name is ${name}`)
    } catch (error) {
        console.log(error)
    }
}

myfunction("mane")