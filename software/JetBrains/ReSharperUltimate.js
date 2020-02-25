'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=RSU&latest=true',
  version: async (res, $) => res.json.RSU[0].version,
  changelog: async (res, $) => [res.json.RSU[0].whatsnew, true],
  download: async (res, $) => res.json.RSU[0].downloads.windows.link,
  install: 'install'
}
module.exports = data
