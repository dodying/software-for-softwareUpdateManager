'use strict'

let data = {
  commercial: 3,
  url: 'https://www.extendoffice.com/download/kutools-for-excel.html',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://download.extendoffice.com/downloads/KutoolsforExcelSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.ai.cli(output, iPath)
  }
}
module.exports = data
