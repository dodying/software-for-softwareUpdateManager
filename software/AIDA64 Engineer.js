'use strict'

let data = {
  commercial: 2,
  url: 'https://www.aida64.co.uk/download',
  version: {
    selector: 'table.download_table > tbody > tr:nth-child(4) > td.version'
  },
  download: {
    selector: 'table.download_table > tbody > tr:nth-child(4) > td.button > a'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
