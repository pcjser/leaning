const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

async function init() {
  try {
    let data = await readFileAsync('../package.json');
    data = JSON.parse(data);
    console.log(data.name);    
  } catch (err) {
    console.log(err);
  }
}

init()