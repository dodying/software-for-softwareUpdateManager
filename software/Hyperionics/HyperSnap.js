'use strict'

let data = {
  commercial: 3,
  url: 'http://www.hyperionics.com/hsdx/index.asp',
  version: {
    selector: '.auto-style2'
  },
  download: {
    plain: 'http://www.hyperionics.com/downloads/HS8Setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
