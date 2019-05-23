'use strict'

let data = {
  commercial: 1,
  url: 'https://www.nurgo-software.com/company/news/13-aquasnap',
  version: {
    selector: '[href^="/company/news/"][title^="AquaSnap"]'
  },
  download: {
    plain: 'https://www.nurgo-software.com/download/AquaSnap.msi'
  },
  preferPath: 'AquaSnap.Configurator.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
