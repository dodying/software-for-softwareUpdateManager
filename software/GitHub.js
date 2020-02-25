'use strict'

let data = {
  url: 'https://central.github.com/deployments/desktop/desktop/changelog.json',
  version: (res, $) => res.json[0].version,
  changelog: async (res, $) => res.json[0].notes.join('\n'),
  download: 'https://central.github.com/deployments/desktop/desktop/latest/win32',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
}
module.exports = data
