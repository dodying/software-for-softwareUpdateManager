'use strict'

let data = {
  site: {
    'GitHub-Api': 'https://api.github.com/repos/wireapp/wire-desktop/releases'
  },
  versionChoice: [/.exe$/, /windows\/(.*)/],
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
}
module.exports = data
