const fs = require('fs')
const path = require('path')

const getLoader = (req, res, next) => {
  res.send(fs.readFileSync(path.join(__dirname, '../utils/loaderio-22fd77ff2528d28c4d69b227d695ba6f.txt')).toString());
}

module.exports.getLoader = getLoader;