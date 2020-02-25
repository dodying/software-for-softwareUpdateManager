'use strict'

let data = {
  url: 'https://bearychat.com/releases/client/changelog.json',
  version: (res, $) => res.json.body.releases[0].version,
  changelog: async (res, $) => [].concat(res.json.body.releases[0].added, res.json.body.releases[0].fixed).filter(i => i).join('\n'),
  download: 'https://static.bearychat.com/v2/BearyChat-x64.exe',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
}
module.exports = data
