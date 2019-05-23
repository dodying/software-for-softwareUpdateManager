'use strict'

let data = {
  url: 'https://www.trisunsoft.com/date-time-counter/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.trisunsoft.com/date-time-counter/date-time-counter.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
