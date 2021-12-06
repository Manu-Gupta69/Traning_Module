const fs = require('fs/promises')
exports.writefile = (path , filecontent) =>{
    let jsoncontent = JSON.stringify(filecontent);
   fs.writeFile(path, jsoncontent).then(()=>{
       console.log('writing successfull');
   }).catch(err=>{
       console.log(err);
   })
}