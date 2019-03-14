'use strict'

let data = {
  url: 'https://miktex.org/download',
  version: {
    selector: '#portable>table>tbody>tr:nth-child(2)>td:nth-child(2)'
  },
  download: {
    selector: '#portable>table a[role="button"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
