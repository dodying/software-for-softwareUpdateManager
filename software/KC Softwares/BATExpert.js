'use strict'

let data = {
  url: 'https://www.kcsoftwares.com/?download',
  version: {
    selector: 'h3:contains("BATExpert")+small>code'
  },
  download: {
    plain: 'https://www.kcsoftwares.com/files/batexpert.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
