'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/spieglt/FlyingCarpet/releases/latest'
  },
  downloadChoice: '[href$="Flying.Carpet.Windows.zip"]',
  install: 'install',
  other: {
    cli: {
      downloadChoice: '[href$="flyingcarpet.CLI.Windows.zip"]',
      install: 'install_zipped_single'
    }
  }
}
module.exports = data
