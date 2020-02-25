'use strict'

let data = {
  site: {
    download: 'https://getquicker.net/Download'
  },
  versionChoice: ['https://getquicker.net/download/item/win_x64', /Quicker.x64.(.*?).msi/],
  install: ['install_msi', null, 'Quicker.exe'],
  other: {
    fast: {
      versionChoice: ['https://getquicker.net/download/item/fast_x64', /Quicker.x64.(.*?).msi/]
    }
  }
}
module.exports = data
