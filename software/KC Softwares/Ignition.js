'use strict'

let data = {
  url: 'https://www.kcsoftwares.com/?download',
  version: {
    selector: 'h3:contains("Ignition")+small>code'
  },
  download: {
    plain: 'https://kcsoftwares.com/files/ignition_lite.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
