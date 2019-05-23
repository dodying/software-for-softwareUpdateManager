'use strict'

let data = {
  commercial: 2,
  url: 'https://tabbles.net/changelog/',
  version: {
    selector: 'h1+h1'
  },
  download: {
    plain: 'https://tabbles.net/downloads/Tabbles-5-installer.exe'
  },
  preferPath: 'tagger.exe',
  install: function (output, iPath, fns) {
    return fns.install.wix(output, iPath, null, 'TabblesSetup.msi', data.preferPath)
  }
}
module.exports = data
