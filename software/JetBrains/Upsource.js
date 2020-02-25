'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=US&latest=true',
  version: async (res, $) => res.json.US[0].version,
  changelog: async (res, $) => [res.json.US[0].whatsnew, true],
  download: async (res, $) => res.json.US[0].downloads.zip.link,
  install: 'install'
}
module.exports = data
