'use strict'

let data = {
  commercial: 3,
  url: 'https://www.proxifier.com/',
  version: {
    selector: '.changelog-win'
  },
  download: {
    plain: 'https://www.proxifier.com/download/ProxifierSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
