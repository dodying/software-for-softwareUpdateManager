'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/sysexp.html',
  version: '.utilcaption',
  changelog: '.utilsubject:contains("Versions History")+ul>li',
  download: 'https://www.nirsoft.net/utils/sysexp-x64.zip',
  install: 'install_zipped_single'
}
module.exports = data
