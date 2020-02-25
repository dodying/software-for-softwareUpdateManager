'use strict'

let data = {
  url: 'https://data.services.jetbrains.com/products/releases?code=PCC&latest=true',
  version: async (res, $) => res.json.PCC[0].version,
  changelog: async (res, $) => [res.json.PCC[0].whatsnew, true],
  download: async (res, $) => res.json.PCC[0].downloads.windows.link,
  install: 'install'
}
module.exports = data
