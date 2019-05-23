'use strict'

let data = {
  commercial: 3,
  url: 'https://www.trisunsoft.com/pc-work-break/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.trisunsoft.com/pc-work-break/pc-work-break.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
