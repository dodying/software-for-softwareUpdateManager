'use strict'

let data = {
  commercial: 2,
  url: 'https://duoyi.io/api/software/version',
  version: (res, $) => res.json.data.version,
  changelog: async (res, $) => res.json.data.description,
  download: (res, $) => res.json.data.url.win,
  install: ['install_zipped', 'install', 'app-64.7z']
}
module.exports = data
