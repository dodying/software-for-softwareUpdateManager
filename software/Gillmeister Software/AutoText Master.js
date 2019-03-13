'use strict'

let data = {
  url: 'https://gillmeister-software.com/products/autotext-master/download.aspx',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gillmeister-software.com/downloads/atm-setup.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno_with_type')(output, iPath)
  }
}
module.exports = data
