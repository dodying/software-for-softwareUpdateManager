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
  install: function (output, iPath) {
    return require('./../js/install_inno')(output, iPath)
  }
}
module.exports = data
