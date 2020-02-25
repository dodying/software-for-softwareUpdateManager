'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/outlook_statistics.html',
  version: '.utilcaption',
  changelog: '.utilsubject:contains("Versions History")+ul>li',
  download: 'https://www.nirsoft.net/utils/outlookstatview-x64.zip',
  install: 'install_zipped_single'
}
module.exports = data
