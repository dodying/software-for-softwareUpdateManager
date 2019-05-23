'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/vov-sitemap-generator/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/vov-sitemap-generator.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
