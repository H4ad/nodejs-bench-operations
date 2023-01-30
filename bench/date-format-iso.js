const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')
const { fromUnixToISOString } = require('../utils/from-unix-to-iso-string');
const { onBenchComplete } = require('../events');

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

suite.add('new Date().toISOString()', function () {
  new Date().toISOString()
})
.add('fromUnixToISOString(new Date())', function () {
  fromUnixToISOString(new Date())
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Date toISOString'))
  console.log(tableHeader)
})
.on('complete', function () {
  onBenchComplete(this)
})
.run({ 'async': false });
