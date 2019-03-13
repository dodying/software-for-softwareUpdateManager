'use strict'

let data = {
  commercial: 3,
  url: 'https://www.deleaker.com/changelog.html',
  version: {
    selector: 'h2>a[name]',
    attr: 'name'
  },
  download: {
    plain: 'https://www.deleaker.com/download/DeleakerSetup.zip'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install_inno')
  }
}
module.exports = data
