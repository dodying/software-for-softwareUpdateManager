'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/battery_information_view.html',
  version: '.utilcaption',
  changelog: '.utilsubject:contains("Versions History")+ul>li',
  download: 'https://www.nirsoft.net/utils/batteryinfoview.zip',
  install: 'install_zipped_single'
}
module.exports = data
