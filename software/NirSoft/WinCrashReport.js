'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/application_crash_report.html',
  version: '.utilcaption',
  changelog: '.utilsubject:contains("Versions History")+ul>li',
  download: 'https://www.nirsoft.net/utils/wincrashreport-x64.zip',
  install: 'install_zipped_single'
}
module.exports = data
