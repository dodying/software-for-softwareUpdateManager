'use strict'

let data = {
  withoutHeader: true,
  url: 'https://windirstat.net/download.html',
  version: 'li.download',
  download: 'a[href*="sourceforge.net"][href$=".exe"]',
  install: ['install_zipped_single', 'windirstat.exe']
}
module.exports = data
