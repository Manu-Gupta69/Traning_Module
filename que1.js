//Write a function testNum that takes a number as an argument and returns a Promise that tests 
//if the value is less than or higher than the value 10.

function testNum(number){
 return new Promise((resolve ,reject)=>{
    if(number < 10)  resolve(number);
    else if(number > 10) reject(number)
 })
}

testNum(9).then(num =>{
    console.log(num , 'is smaller than 10')
}).catch(num=>{
    console.log(num , 'is greater than 10')
})