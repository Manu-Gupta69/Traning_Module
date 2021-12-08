const url = require('./url');
const path = require('path')
const {writefile} = require('./writefile');
const axios = require('axios');
exports.getData = async (urlendpoint) => {
  try {
    const response = await axios({
      method: 'get',
      url:`${url}${urlendpoint}`
    });
    const splitUrl = urlendpoint.split('/');
      const filename = (splitUrl.length > 1) ? splitUrl[0]+splitUrl[1] : splitUrl[0]

      const data = response.data
      const currpath = path.join(__dirname , 'output');
      const savepath =  `${currpath}\\${Date.now()}_${filename}.txt`
     //console.log(savepath)
      writefile(savepath, data);
  } catch (err) {
    //console.log(err.response);
     console.log('Invalid request')
    //return err;
  }
};
