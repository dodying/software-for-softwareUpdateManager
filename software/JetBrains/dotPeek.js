'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=DPK&latest=true',
  version: async (res, $) => res.json.DPK[0].version,
  changelog: async (res, $) => [res.json.DPK[0].whatsnew, true],
  download: async (res, $) => res.json.DPK[0].downloads.windows64.link,
  install: 'install'
}
module.exports = data
