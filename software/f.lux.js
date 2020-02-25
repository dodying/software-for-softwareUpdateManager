'use strict'

let data = {
  url: 'https://justgetflux.com/update/v4/windows-download.json',
  version: (res, $) => JSON.parse(res.body.match(/^fluxupdate\((.*)\)$/)[1]).version,
  changelog: ['https://justgetflux.com/news/pages/v4/readme/', '[id^="version-"]+ul'],
  download: (res, $) => new URL(JSON.parse(res.body.match(/^fluxupdate\((.*)\)$/)[1]).update).href.replace(/\?.*/, ''),
  install: 'install_nsis'
}
module.exports = data
