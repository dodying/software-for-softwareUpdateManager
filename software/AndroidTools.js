'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/android-tools/files/'
  },
  versionChoice: /AT-INSTALLER-([\d-]+).msi/,
  install: ['install_msi', null, 'AndroidTools.exe']
}
module.exports = data
