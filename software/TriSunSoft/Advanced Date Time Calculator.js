'use strict'

let data = {
  commercial: 3,
  url: 'https://www.trisunsoft.com/advanced-date-time-calculator/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.trisunsoft.com/advanced-date-time-calculator/adtc.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
