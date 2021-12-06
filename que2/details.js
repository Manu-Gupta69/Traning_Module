const fs = require("fs");
const path = require("path");
const { getdata } = require("./getdata");
const { writefile } = require("./writefile");

function kmp(str, pattern, patterntable) {
  let matchval = {
    "\\": true,
    " ": true,
    "@": true,
    ".": true,
  };
  let i = 0;
  let j = 0;
  while (i <= str.length) {
    if (str[i] === pattern[j]) {
      if (j == pattern.length - 1 && matchval[str[i + 1]]) {
        return true;
      }
      i++;
      j++;
    } else if (j > 0) {
      j = patterntable[j - 1] + 1;
    } else {
      i++;
    }
  }
  return false;
}

function createpattern(patternstr) {
  let j = 0,
    i = 1;
  let patterntable = new Array(patternstr.length).fill(-1);
  while (i < patternstr.length) {
    if (patternstr[i] === patternstr[j]) {
      patterntable[i] = j;
      i++;
      j++;
    } else if (j > 0) {
      j = patterntable[j - 1] + 1;
    } else {
      i++;
    }
  }
  return patterntable;
}

exports.setdetails = async () => {
  try {
    let jobpath = path.join(__dirname, "jobs.json");
    let technologiespath = path.join(__dirname, "technologies.json");
    let jobdata = await getdata(jobpath);
    let techdata = await getdata(technologiespath);
    let finaldata = jobdata.map((item) => {
      let outputarr = [];
      for (let tech of techdata) {
        const pattertable = createpattern(tech);
        const ans = kmp(item.description, tech, pattertable);
        if (ans) outputarr.push(tech);
      }
      item.tags = [...outputarr];
      item.processing_timestamp = Date.now();
      return item;
    });
    let currpath = path.join(__dirname);
    let filename = `${currpath}\\${Date.now()}_response.json`
    writefile(filename , finaldata);
  } catch {
    //
  }
};
