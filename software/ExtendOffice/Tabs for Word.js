'use strict'

let data = {
  commercial: 3,
  url: 'https://www.extendoffice.com/download.html',
  version: {
    selector: '.uk-table > tbody:nth-child(1) > tr:nth-child(8) > td:nth-child(2)'
  },
  download: {
    plain: 'https://download.extendoffice.com/downloads/SetupWordTab.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.cli(output, iPath)
  }
}
module.exports = data
