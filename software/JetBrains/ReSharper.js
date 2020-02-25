'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=RS&latest=true',
  version: async (res, $) => res.json.RS[0].version,
  changelog: async (res, $) => [res.json.RS[0].whatsnew, true],
  download: async (res, $) => res.json.RS[0].downloads.windowsWeb.link,
  install: 'install'
}
module.exports = data
