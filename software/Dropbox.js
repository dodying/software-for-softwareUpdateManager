'use strict'

let data = {
  url: 'https://www.dropboxforum.com/t5/Desktop-client-builds/bd-p/101003016',
  version: '[href^="/t5/Desktop-client-builds/Stable-Build"]',
  changelog: {
    url: '[href^="/t5/Desktop-client-builds/Stable-Build"]',
    selector: '#bodyDisplay'
  },
  download: 'https://clientupdates.dropboxstatic.com/dbx-releng/client/Dropbox%20{version}%20Offline%20Installer.exe',
  install: ['install_zipped', 'install_nsis', 'Installer.exe', null, '$0'],
  other: {
    beta: {
      version: '[href^="/t5/Desktop-client-builds/Beta-Build"]',
      changelog: {
        url: '[href^="/t5/Desktop-client-builds/Beta-Build"]',
        selector: '#bodyDisplay'
      }
    }
  }
}
module.exports = data
