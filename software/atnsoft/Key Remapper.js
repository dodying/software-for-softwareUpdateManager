'use strict'

let data = {
  url: 'https://atnsoft.com/keyremapper/versions/',
  version: {
    selector: 'h3'
  },
  download: {
    plain: 'https://atnsoft.com/downloads/keyremapper_setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath)
  }
}
module.exports = data
