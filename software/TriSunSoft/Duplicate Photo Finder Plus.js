'use strict'

let data = {
  commercial: 3,
  url: 'https://duplicatefilefinder4pc.com/duplicate-photo-finder-plus.htm',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://duplicatefilefinder4pc.com/f/duplicate-photo-finder-plus.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
