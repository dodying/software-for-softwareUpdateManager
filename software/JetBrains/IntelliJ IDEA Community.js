'use strict'

let data = {
  url: 'https://data.services.jetbrains.com/products/releases?code=IIC&latest=true',
  version: async (res, $) => res.json.IIC[0].version,
  changelog: async (res, $) => [res.json.IIC[0].whatsnew, true],
  download: async (res, $) => res.json.IIC[0].downloads.windowsZip.link,
  install: 'install'
}
module.exports = data
