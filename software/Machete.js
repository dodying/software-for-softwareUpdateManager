'use strict'

let data = {
  commercial: 2,
  url: 'http://www.machetesoft.com/machete-version-history.html',
  version: 'h1>strong',
  changelog: 'ul.pb-2',
  download: 'http://www.machetesoft.com/downloads/MacheteInst.msi',
  install: ['install_msi', null, 'Machete.exe'],
  other: {
    lite: {
      commercial: 0,
      download: 'http://www.machetesoft.com/downloads/MacheteLiteInst.msi',
      install: ['install_msi', null, 'MacheteLite.exe']
    }
  }
}
module.exports = data
