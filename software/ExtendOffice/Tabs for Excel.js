'use strict'

let data = {
  commercial: 3,
  url: 'https://www.extendoffice.com/download/excel-workbooks-tabs.html',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://download.extendoffice.com/downloads/SetupExcelTab.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.cli(output, iPath)
  }
}
module.exports = data
