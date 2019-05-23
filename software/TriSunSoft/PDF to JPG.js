'use strict'

let data = {
  commercial: 3,
  url: 'https://www.pdf-helper.com/pdf-to-jpg/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.pdf-helper.com/files/pdf2jpg.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
