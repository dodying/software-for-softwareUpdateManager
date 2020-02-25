'use strict'

let data = {
  commercial: 2,
  useProxy: true,
  url: 'https://protonvpn.com/download/win-update.json',
  version: (res, $) => res.json.Categories[1].Releases[0].Version,
  changelog: async (res, $) => res.json.Categories[1].Releases[0].ChangeLog.join('\n'),
  download: (res, $) => res.json.Categories[1].Releases[0].File.Url,
  install: 'install_ai'
}
module.exports = data
