'use strict'

let data = {
  commercial: 2,
  url: 'https://www.essentialpim.com/news/version-history',
  version: {
    selector: '.title_blue2'
  },
  download: {
    plain: 'http://www.essentialpim.com/download/EssentialPIMPro6.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
