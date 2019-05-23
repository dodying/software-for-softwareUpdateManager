'use strict'

let data = {
  commercial: 3,
  url: 'https://duplicatefilefinder4pc.com/duplicate-file-finder-plus.htm',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://duplicatefilefinder4pc.com/f/duplicate-file-finder-plus.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
