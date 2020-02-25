'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/run_from_process.html',
  version: '.utilcaption',
  changelog: '.utilsubject:contains("Versions History")+ul>li',
  download: 'https://www.nirsoft.net/utils/runfromprocess.zip',
  install: ['install_zipped_single', 'x64.exe']
}
module.exports = data
