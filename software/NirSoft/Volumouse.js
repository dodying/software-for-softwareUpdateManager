'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/volumouse.html',
  version: '.utilcaption',
  changelog: '.utilsubject:contains("Versions History")+ul>li',
  download: 'https://www.nirsoft.net/utils/volumouse-x64.zip',
  install: ['install_zipped_single', 'volumouse.exe']
}
module.exports = data
