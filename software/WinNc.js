'use strict'

let data = {
  commercial: 3,
  url: 'https://www.winnc.com/download/',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'http://www.winnc.com/setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
