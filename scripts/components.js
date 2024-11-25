const chdar = require('chokidar')

const watcher = chdar.watch('../views/partials')
console.log(watcher)

watcher.on('add', path => { console.log(path)})

process.exit(0)