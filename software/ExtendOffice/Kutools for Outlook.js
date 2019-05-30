'use strict'

let data = {
  commercial: 3,
  url: 'https://www.extendoffice.com/download/kutools-for-outlook.html',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://download.extendoffice.com/downloads/OutlookKutools.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.cli(output, iPath)
  }
}
module.exports = data