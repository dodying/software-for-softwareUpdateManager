'use strict'

let data = {
  commercial: 3,
  url: 'https://www.aignes.com/notebook.htm',
  version: {
    selector: '.mobile .medium'
  },
  download: {
    plain: 'https://www.aignes.info/download/notesetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
