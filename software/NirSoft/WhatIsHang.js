'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/what_is_hang.html',
  version: '.utilcaption',
  changelog: '.utilsubject:contains("Versions History")+ul>li',
  download: 'https://www.nirsoft.net/utils/whatishang-x64.zip',
  install: 'install_zipped_single'
}
module.exports = data
