'use strict'

let data = {
  commercial: 2,
  url: 'https://dl.pstmn.io/api/version/notes?channel=stable',
  version: (res, $) => res.json.notes[0].version,
  changelog: async (res, $) => res.json.notes[0].content,
  download: 'https://dl.pstmn.io/download/latest/win64',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
}
module.exports = data
