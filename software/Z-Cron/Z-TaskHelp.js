'use strict'

let data = {
  url: 'https://www.z-cron.com/download.html',
  version: ['.ztaskhelp .box:contains("Version")+.boxe', 'text', /([\d.]+ Build \d+)/i],
  download: 'http://www.z-download.de/down/Z-TaskHelp.zip'
}
module.exports = data
