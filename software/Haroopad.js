'use strict'

let data = {
  site: {
    BitBucket: 'https://api.bitbucket.org/2.0/repositories/rhiokim/haroopad-download/downloads'
  },
  versionChoice: /Haroopad-v(.*)-win-x64.msi/,
  install: ['install_msi', null, 'haroopad.exe']
}
module.exports = data
