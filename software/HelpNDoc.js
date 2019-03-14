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
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, '1')
  }
}
module.exports = data
