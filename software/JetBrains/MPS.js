'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=MPS&latest=true',
  version: async (res, $) => res.json.MPS[0].version,
  changelog: async (res, $) => [res.json.MPS[0].whatsnew, true],
  download: async (res, $) => res.json.MPS[0].downloads.zip.link,
  install: 'install'
}
module.exports = data
