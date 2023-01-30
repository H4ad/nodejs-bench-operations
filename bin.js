const fs = require('fs')
const path = require('path')
const os = require('os')
const { spawn } = require('child_process')

const machineInfo = `${os.platform()} ${os.arch()} | ${os.cpus().length} vCPUs | ${(os.totalmem() / (1024 ** 3)).toFixed(1)}GB Mem`

const writter = process.stdout

writter.write('# Node.js Benchmark Operations')
writter.write(`\n
* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
`)

const major = process.version.split('.')[0]
const jsonResultsFile = fs.createWriteStream(
  `${path.join(major, `${process.version}.json`)}`,
  { flags: 'w', autoClose: true }
)

jsonResultsFile.write('{')

const stdio = ['pipe', 'pipe', 'pipe', 'ipc']
let firstFileCall = true
async function spawnBench(file) {
  return new Promise((resolve) => {
    let firstCall = true
    let separator = firstFileCall ? '' : ','
    firstFileCall = false
    jsonResultsFile.write(`${separator}"${file}": [`)
    const out = spawn(
      process.execPath,
      [path.join(__dirname, './bench', file)],
      {
        stdio,
        env: { BENCH_SEND_EVENT: true }
      },
    );
    out.stdout.pipe(writter)
    out.on('message', (m) => {
      let separator = firstCall ? '' : ','
      jsonResultsFile.write(separator + m)
      firstCall = false
    })
    out.on('close', () => {
      jsonResultsFile.write(']')
      resolve()
    })
    writter.write('\n')
  })
}

async function main() {
  const files = fs.readdirSync(path.join(__dirname, './bench'))
  for (const file of files) {
    await spawnBench(file)
  }
  jsonResultsFile.write('}')
  writter.end()
}

main()
