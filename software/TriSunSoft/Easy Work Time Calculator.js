'use strict'

let data = {
  url: 'https://www.trisunsoft.com/easy-work-time-calculator/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.trisunsoft.com/easy-work-time-calculator/ewtc.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
