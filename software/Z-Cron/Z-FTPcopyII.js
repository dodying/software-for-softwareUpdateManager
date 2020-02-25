'use strict'

let data = {
  commercial: 3,
  url: 'https://www.z-cron.com/download.html',
  version: ['.zftpcopy .box:contains("Version")+.boxe', 'text', /([\d.]+ Build \d+)/i],
  download: 'http://www.z-download.de/down/zcopy2.zip'
}
module.exports = data
