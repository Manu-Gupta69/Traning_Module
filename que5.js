//Implement the setTimeout function using native javascript only. 

function createsettimeout(){
    let id = 0;
    let map = {}
    function check(){
        if (Object.keys(map).length <= 0) return;
        let currenttime = Date.now();
        for (var timer in map ) {
          if (map.hasOwnProperty(timer) && currenttime > map[timer].executedtime) { // check if the current timer needs to be executed
            map[timer].callback();
            clearsettimeout(timer);
          }
        }
        setImmediate(check);
    }
   function mysettimeout(callback , delay){
    if(typeof callback !== 'function')  return 'callback should  be a function';
    if(typeof delay  !== 'number' ||  delay < 0) return 'enter valid number';
    let currenttime = Date.now();
    let executedtime = currenttime+delay;
      map[id] = {callback,executedtime};
      id+=1;
      console.log(map)
      setImmediate(check);
      return id-1;
   }
   function clearsettimeout(id){
    if (map.hasOwnProperty(id)) delete map[id];
   }
return {mysettimeout , clearsettimeout}
}

let timeout1 = createsettimeout();
let timeout2 = createsettimeout();
timeout1.mysettimeout(()=>{
    console.log('running after 2 sec')
} , 2000)
let id = timeout2.mysettimeout(()=>{
    console.log('running after 2 sec timeout2')
} , 2000)
console.log('sync code is running')

//timeout1.clearsettimeout(id)