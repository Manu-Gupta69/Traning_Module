/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
const path = require('path');
const { getdata } = require('./getdata');
const { writefile } = require('./writefile');

function kmp(str, pattern, patterntable) {
  let matchval = {
    '\\': true,
    ' ': true,
    '@': true,
    '.': true,
  };
  let i = 0;
  let j = 0;
  while (i <= str.length) {
    if (str[i] === pattern[j]) {
      if (j == pattern.length - 1 && matchval[str[i + 1]]) {
        return true;
      }
      i += 1;
      j += 1;
    } else if (j > 0) {
      j = patterntable[j - 1] + 1;
    } else {
      i += 1;
    }
  }
  return false;
}

function createpattern(patternstr) {
  let j = 0;
  let i = 1;
  const patterntable = new Array(patternstr.length).fill(-1);
  while (i < patternstr.length) {
    if (patternstr[i] === patternstr[j]) {
      patterntable[i] = j;
      i += 1;
      j += 1;
    } else if (j > 0) {
      j = patterntable[j - 1] + 1;
    } else {
      i += 1;
    }
  }
  return patterntable;
}

exports.setdetails = async () => {
  try {
    const jobpath = path.join(__dirname, 'jobs.json');
    const technologiespath = path.join(__dirname, 'technologies.json');
    const jobdata = await getdata(jobpath);
    const techdata = await getdata(technologiespath);
    const finaldata = jobdata.map((item) => {
      const outputarr = [];
      for (const tech of techdata) {
        const pattertable = createpattern(tech);
        const ans = kmp(item.description, tech, pattertable);
        if (ans) outputarr.push(tech);
      }
      item.tags = [...outputarr];
      item.processing_timestamp = Date.now();
      return item;
    });
    const currpath = path.join(__dirname);
    const filename = `${currpath}\\${Date.now()}_response.json`;
    writefile(filename, finaldata);
  } catch {
    //
  }
};
