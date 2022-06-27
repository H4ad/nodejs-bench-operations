const fs = require('fs')
const path = require('path')
const os = require('os')
const { createTableHeader } = require('./markdown')
const { spawnSync } = require('child_process')

const machineInfo = `${os.platform()} ${os.arch()} | ${os.cpus().length} vCPUs | ${(os.totalmem() / (1024 ** 3)).toFixed(1)}GB Mem`

const writter = process.stdout

writter.write('# Node.js Benchmark Operations')
writter.write(`\n
* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
`)


const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

fs.readdir(path.join(__dirname, './bench'), (_err, files) => {
  for (const file of files) {
    const out = spawnSync(process.execPath, [path.join(__dirname, './bench', file)]).stdout
    writter.write('\n## ' + file.split('.')[0])
    writter.write('\n\n' + tableHeader)
    writter.write('\n' + out.toString())
  }
  writter.end()
})
