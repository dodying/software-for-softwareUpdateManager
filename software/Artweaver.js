'use strict'

let data = {
  commercial: 2,
  url: 'https://www.artweaver.de/en/changelog',
  version: {
    selector: 'a[href^="/en/help/"]'
  },
  download: {
    plain: 'https://www.artweaver.de/direct/ArtweaverPlus.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
