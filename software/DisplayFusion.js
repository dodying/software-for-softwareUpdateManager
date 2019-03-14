'use strict'

let data = {
  commercial: 2,
  url: 'https://www.displayfusion.com/ChangeLog/',
  version: {
    selector: 'h1+h2'
  },
  download: {
    plain: 'https://www.binaryfortress.com/Data/Download/?package=displayfusion&log=101'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
