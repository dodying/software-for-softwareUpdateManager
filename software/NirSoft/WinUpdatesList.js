'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/wul.html',
  version: '.utilcaption',
  changelog: '.utilsubject:contains("Versions History")+ul>li',
  download: 'https://www.nirsoft.net/utils/wul.zip',
  install: 'install_zipped_single'
}
module.exports = data
