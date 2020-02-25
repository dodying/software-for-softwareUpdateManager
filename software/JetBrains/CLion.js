'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=CL&latest=true',
  version: async (res, $) => res.json.CL[0].version,
  changelog: async (res, $) => [res.json.CL[0].whatsnew, true],
  download: async (res, $) => res.json.CL[0].downloads.windowsZip.link,
  install: 'install'
}
module.exports = data
