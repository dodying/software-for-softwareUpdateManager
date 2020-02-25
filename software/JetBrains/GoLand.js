'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=GO&latest=true',
  version: async (res, $) => res.json.GO[0].version,
  changelog: async (res, $) => [res.json.GO[0].whatsnew, true],
  download: async (res, $) => res.json.GO[0].downloads.windows.link,
  install: 'install'
}
module.exports = data
