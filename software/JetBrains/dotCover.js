'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=DC&latest=true',
  version: async (res, $) => res.json.DC[0].version,
  changelog: async (res, $) => [res.json.DC[0].whatsnew, true],
  download: async (res, $) => res.json.DC[0].downloads.windowsWeb.link,
  install: 'install'
}
module.exports = data
