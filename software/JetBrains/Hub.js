'use strict'

let data = {
  commercial: 3,
  url: 'https://data.services.jetbrains.com/products/releases?code=HB&latest=true',
  preferPath: 'bin/hub.bat',
  version: async (res, $) => res.json.HB[0].version,
  changelog: async (res, $) => [res.json.HB[0].whatsnew, true],
  download: async (res, $) => res.json.HB[0].downloads.windows.link,
  install: ['install_msi', null, 'bin/hub.bat']
}
module.exports = data
