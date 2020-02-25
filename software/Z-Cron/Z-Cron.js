'use strict'

let data = {
  url: 'https://www.z-cron.com/download.html',
  version: ['.zcron .box:contains("Version")+.boxe', 'text', /([\d.]+ Build \d+)/i],
  changelog: ['https://wordpress.z-dbackup.de/z-cron-update-information/', '.article'],
  download: 'http://www.z-download.de/down/zcron.zip'
}
module.exports = data
