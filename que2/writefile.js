// eslint-disable-next-line linebreak-style
const fs = require('fs/promises');

exports.writefile = (path, filecontent) => {
  const jsoncontent = JSON.stringify(filecontent);
  fs.writeFile(path, jsoncontent)
    .then(() => {
      console.log('writing successfull');
    })
    .catch((err) => {
      console.log(err);
    });
};
