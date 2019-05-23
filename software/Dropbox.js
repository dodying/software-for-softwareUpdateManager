'use strict'

let data = {
  // useProxy: true,
  url: 'https://www.dropboxforum.com/t5/Desktop-client-builds/bd-p/101003016',
  version: {
    selector: '[href^="/t5/Desktop-client-builds/Stable-Build"]'
  },
  download: {
    plain: 'https://clientupdates.dropboxstatic.com/dbx-releng/client/Dropbox%20{version}%20Offline%20Installer.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'Installer.exe', null, '$0')
  },
  other: {
    beta: {
      version: {
        selector: '[href^="/t5/Desktop-client-builds/Beta-Build"]'
      }
    }
  }
}
module.exports = data
