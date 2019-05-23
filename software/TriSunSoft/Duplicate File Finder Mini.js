'use strict'

let data = {
  url: 'https://duplicatefilefinder4pc.com/duplicate-file-finder-free.htm',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://duplicatefilefinder4pc.com/f/duplicate-file-finder-mini.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
