'use strict'

let data = {
  url: 'https://cemu.info/',
  version: 'h1:contains("Latest release")+p',
  changelog: ['https://cemu.info/changelog.html', '.col-sm-12.well'],
  download: '[name="download"]',
  install: 'install'
}
module.exports = data
