'use strict'

let data = {
  url: 'https://www.aignes.com/psmenu.htm',
  version: {
    selector: '.mobile .medium'
  },
  download: {
    plain: 'https://www.aignes.info/download/psmsetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
