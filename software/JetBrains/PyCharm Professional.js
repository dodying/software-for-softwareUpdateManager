'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=PCP&latest=true',
  version: async (res, $) => res.json.PCP[0].version,
  changelog: async (res, $) => [res.json.PCP[0].whatsnew, true],
  download: async (res, $) => res.json.PCP[0].downloads.windows.link,
  install: 'install'
}
module.exports = data
