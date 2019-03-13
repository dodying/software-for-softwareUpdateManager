'use strict'

let data = {
  commercial: 1,
  url: 'https://www.helpndoc.com/download/',
  version: {
    selector: '.btn-dl-version'
  },
  download: {
    plain: 'https://www.helpndoc.com/helpndoc-setup.exe'
  },
  install: function (output, iPath) {
    return require('./../js/install_inno_with_type')(output, iPath, null, '1')
  }
}
module.exports = data
