const fs = require('fs/promises');

exports.getdata = (path) => {
  return new Promise((resolve, reject) => fs.readFile(path)
      .then((data) => {
        let jsdata = JSON.parse(data);
         resolve(jsdata);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  );
};
