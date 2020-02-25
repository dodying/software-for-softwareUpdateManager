'use strict'

let data = {
  url: 'https://www.clipber.com/',
  version: '[name="download_app"]+div>div>div:nth-child(2) .quote2',
  download: '[name="download_app"]+div>div>div:nth-child(2) a[href$=".exe"]',
  install: 'install_inno'
}
module.exports = data
