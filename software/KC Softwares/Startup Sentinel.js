'use strict'

let data = {
  url: 'https://www.kcsoftwares.com/?download',
  version: {
    selector: 'h3:contains("Startup Sentinel")+small>code'
  },
  download: {
    plain: 'https://www.kcsoftwares.com/files/sus.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
