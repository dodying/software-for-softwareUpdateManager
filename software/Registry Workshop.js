'use strict'

let data = {
  commercial: 3,
  url: 'http://www.torchsoft.com/en/download.html',
  version: {
    selector: 'table>tbody>tr'
  },
  download: {
    plain: 'http://www.torchsoft.com/download/RegistryWorkshop.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
