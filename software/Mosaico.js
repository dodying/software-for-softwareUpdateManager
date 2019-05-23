'use strict'

let data = {
  url: 'http://www.soulidstudio.com/download/',
  version: {
    selector: 'div.flex_column:nth-child(3) > section:nth-child(1) > div:nth-child(1) > p:nth-child(8)'
  },
  download: {
    plain: 'http://www.soulidstudio.com/downloads/mosaico_setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
