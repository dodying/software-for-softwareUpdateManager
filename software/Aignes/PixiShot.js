'use strict'

let data = {
  url: 'https://www.aignes.com/pixishot.htm',
  version: {
    selector: '.mobile .medium'
  },
  download: {
    plain: 'https://www.aignes.info/download/pixisetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
