'use strict'

let data = {
  site: {
    'GitHub-Api': 'https://api.github.com/repos/trufflesuite/ganache/releases'
  },
  versionChoice: [/.exe$/, null, false],
  install: ['install_zipped', 'install', 'app-64.7z'],
  other: {
    beta: {
      site: {
        'GitHub-Api': 'https://api.github.com/repos/trufflesuite/ganache/releases'
      },
      versionChoice: /.exe$/
    }
  }
}
module.exports = data
