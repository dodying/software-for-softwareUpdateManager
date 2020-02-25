'use strict'

let data = {
  commercial: 3,
  url: 'https://eagle.cool/check-for-update',
  version: (res, $) => res.json.version,
  changelog: async (res, $) => [res.json.contentCN, true],
  download: (res, $) => res.json.windows.url,
  install: 'install_nsis_cli'
}
module.exports = data
