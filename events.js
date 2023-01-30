const Benchmark = require('benchmark')
const fastJson = require('fast-json-stringify')

const stringifyEvent = fastJson({
  title: 'Benchmark Event',
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    stats: {
      type: 'object',
      properties: {
        moe: {
          type: 'string'
        },
        rme: {
          type: 'string'
        },
        sem: {
          type: 'string'
        },
        deviation: {
          type: 'string'
        },
        mean: {
          type: 'string'
        },
        variance:  {
          type: 'string'
        },
      }
    },
    cycles: {
      type: 'integer'
    },
    hz: {
      type: 'integer'
    }
  }
})

function onBenchComplete(suite) {
  if (process.env.BENCH_SEND_EVENT && process.send) {
    for (const event of Object.values(suite)) {
      if (event instanceof Benchmark) {
        process.send(stringifyEvent(event))
      }
    }
  }
}

module.exports = {
  onBenchComplete,
}
