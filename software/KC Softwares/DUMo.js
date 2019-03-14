'use strict'

let data = {
  commercial: 3,
  url: 'https://www.kcsoftwares.com/?download',
  version: {
    selector: 'h3:contains("DUMo")+small>code'
  },
  download: {
    plain: 'https://www.kcsoftwares.com/files/dumo.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
