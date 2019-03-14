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
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_inno')
  }
}
module.exports = data
