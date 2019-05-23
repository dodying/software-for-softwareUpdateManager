'use strict'

let data = {
  commercial: 3,
  url: 'https://www.extendoffice.com/download/office-tab.html',
  version: {
    selector: '.uk-text-large'
  },
  download: {
    plain: 'https://download.extendoffice.com/downloads/SetupOfficeTab.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.cli(output, iPath)
  },
  other: {
    Enterprise: {
      plain: 'https://download.extendoffice.com/downloads/SetupOfficeTabEnterprise.exe'
    }
  }
}
module.exports = data
