'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/emoacht/Monitorian/releases/latest'
  },
  versionChoice: /(.*)-Installer/,
  install: ['install_zipped', 'install_msi', '.msi', null, 'Monitorian.exe']
}
module.exports = data
