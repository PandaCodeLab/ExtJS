import 'regenerator-runtime/runtime.js'
import Timer from './timer'
let commonCounter = require('./commonjs-test')
import stringModule from './stringModule'
import { current as test } from './es-test'

window.addEventListener('load', () => {
  const timer1 = new Timer('.timer1', 1000)

  const range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
      let { from: value, to } = this
      return {
        next() {
          let res

          if (value <= to) {
            res = {
              done: false,
              value,
            }
          } else {
            res = {
              done: true,
            }
          }

          value++
          return res
        },
      }
    },
  }

  function* rangeGen(from, to, step = 0.5) {
    for (let value = from; value <= to; value += step) {
      yield value
    }
  }

  for (let once of rangeGen(1, 5, 0.3)) {
    //console.log(once.toFixed(1))
  }

  const story = 'sda dsa 321 d312'

  for (let word of stringModule.getWords(story)) {
    console.log(word)
  }

  const res = undefined + '321'
  console.log(res)
})
