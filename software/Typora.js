'use strict'

let data = {
  url: 'https://typora.io/windows/dev_release.html',
  version: {
    selector: 'h4'
  },
  download: {
    plain: 'https://typora.io/windows/typora-setup-x64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
