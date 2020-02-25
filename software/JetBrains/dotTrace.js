'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=DP&latest=true',
  version: async (res, $) => res.json.DP[0].version,
  changelog: async (res, $) => [res.json.DP[0].whatsnew, true],
  download: async (res, $) => res.json.DP[0].downloads.windows64.link,
  install: 'install'
}
module.exports = data
