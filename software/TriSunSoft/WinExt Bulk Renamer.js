'use strict'

let data = {
  commercial: 0,
  url: 'https://www.trisunsoft.com/webr/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.trisunsoft.com/files/webr.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
