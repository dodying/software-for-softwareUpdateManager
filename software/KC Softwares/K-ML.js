'use strict'

let data = {
  commercial: 3,
  url: 'https://www.kcsoftwares.com/?download',
  version: {
    selector: 'h3:contains("K-ML")+small>code'
  },
  download: {
    plain: 'https://kcsoftwares.com/files/kml.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
