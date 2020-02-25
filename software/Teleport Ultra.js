'use strict'

let data = {
  commercial: 3,
  url: 'http://www.tenmax.com/teleport/version.htm',
  version: '.ver',
  changelog: {
    selector: '.bodytable .middle',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'http://www.tenmax.com/Teleport_Ultra_Installer.exe',
  install: 'install_nsis_cli',
  other: {
    pro: {
      download: 'http://www.tenmax.com/Teleport_Pro_Installer.exe'
    }
  }
}
module.exports = data
