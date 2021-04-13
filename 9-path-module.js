const path = require('path')

const basename = path.join('node', 'projects', 'new')

const absolute = path.resolve(basename)

console.log(absolute)

