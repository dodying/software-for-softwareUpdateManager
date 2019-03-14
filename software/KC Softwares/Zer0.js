'use strict'

let data = {
  url: 'https://www.kcsoftwares.com/?download',
  version: {
    selector: 'h3:contains("Zer0")+small>code'
  },
  download: {
    plain: 'https://www.kcsoftwares.com/files/zero.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
