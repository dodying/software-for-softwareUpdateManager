'use strict'

let data = {
  commercial: 3,
  url: 'https://www.aignes.com/lwa.htm',
  version: {
    selector: '.mobile .medium',
    match: /\((.*)\)/
  },
  download: {
    plain: 'https://www.aignes.info/download/wsasetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
