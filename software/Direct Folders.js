'use strict'

let data = {
  commercial: 2,
  url: 'https://www.codesector.com/downloads',
  version: {
    selector: 'td:contains("Direct Folders")'
  },
  download: {
    plain: 'https://www.codesector.com/files/directfolders.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
