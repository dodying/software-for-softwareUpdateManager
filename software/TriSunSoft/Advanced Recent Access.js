'use strict'

let data = {
  commercial: 3,
  url: 'https://www.trisunsoft.com/advanced-recent-access/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.trisunsoft.com/advanced-recent-access/ara.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
