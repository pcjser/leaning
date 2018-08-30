const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
// const conf = require('../config/defaultConfig');
const mime = require('../helper/mime');
const compress = require('../helper/compress');
const range = require('../helper/range');

const tplPath = path.join(__dirname, '../template/dir.tpl');
const source = fs.readFileSync(tplPath);
const template = Handlebars.compile(source.toString());

module.exports = async function (req, res, filePath, conf) {
  try {
    const stats = await stat(filePath);
    if(stats.isFile()) {
      res.statusCode = 200;
      res.setHeader('Content-Type',  mime(filePath));
      let rs;
      const { code, start, end } = range(stats.size, req, res);
      if(code === 200) {
        rs = fs.createReadStream(filePath);
      } else {
        rs = fs.createReadStream(filePath, { start, end });
      }
      
      /* 文件压缩 */
      if(filePath.match(conf.compress)) {
        rs = compress(rs, req, res);
      }
      rs.pipe(res);
    } else if (stats.isDirectory()) {
      const files = await readdir(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      const dir = path.relative(conf.root, filePath)
      const data = {        
        title: path.basename(filePath),
        dir: dir ? `/${dir}` : '',
        files: files.map(file => {
          return {
            file,
            icon: mime(file)
          }
        })
      }
      res.end(template(data))
    }
  } catch(ex) {
    res.statusCode = 404;
    res.setHeader('Content-Type',  'text/plain');
    res.end(`${filePath} is not a directory or file`);
  }
}