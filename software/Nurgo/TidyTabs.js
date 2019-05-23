'use strict'

let data = {
  commercial: 1,
  url: 'https://www.nurgo-software.com/company/news/20-tidytabs',
  version: {
    selector: '[href^="/company/news/"][title^="TidyTabs"]'
  },
  download: {
    plain: 'https://www.nurgo-software.com/download/TidyTabs.msi'
  },
  preferPath: 'TidyTabs.Gui.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
