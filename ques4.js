// Let's assume that we have a for loop that prints 0 to 10 at random intervals (0 to 6 seconds).
//  We need to modify it using promises to print sequentially 0 to 10. For example, 
// if 0 takes 6 seconds to print and 1 takes two seconds to print, 
// then 1 should wait for 0 to print, and so on.
function sleep(i,  sec){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            resolve(i);
        }, sec)
    })
}
(async function (){
    for(let i=0; i<=10 ;i++){
      await sleep(i , Math.random()*7000);
      console.log(i);
   }
})();
