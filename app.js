const http = require('http');
const path = require('path');
const fs = require('fs/promises');

const server = http.createServer((req, res) => {
  const method = req.method;
  const data = req.body;
  console.log(req.body)
  const invpath = path.join(__dirname, 'data', 'inv.json');
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  } else if (method === 'GET' && req.url === '/inventory') {
    fs.readFile(invpath)
      .then((filecontent) => {
        res.write(filecontent);
        res.end();
      })
      .catch((err) => {
        res.write('NO DATA FOUND');
        res.end();
      });
  } else if (method == 'POST' && req.url === '/inventory') {
    fs.readFile(invpath).then(filecontent=>{
        res.end()
    }).catch(err =>{
        const inventory = [];
        inventory.push(data);
        fs.writeFile(invpath , JSON.stringify(inventory)).then((filecontent)=>{
            res.write(JSON.stringify(filecontent));
            res.end();
        }).catch(err =>{
           console.log(err);
           res.end()
        })
    })
  }
});
server.listen(3000);
