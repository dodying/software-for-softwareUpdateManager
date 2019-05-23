'use strict'

let data = {
  commercial: 2,
  url: 'https://www.codesector.com/downloads',
  version: {
    selector: 'td:contains("TeraCopy")'
  },
  download: {
    plain: 'https://www.codesector.com/files/teracopy.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
