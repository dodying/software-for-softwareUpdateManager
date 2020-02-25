'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/nircmd.html',
  version: '.utilcaption',
  changelog: '.utilsubject:contains("Versions History")+table>tbody>tr:nth-child(2)>td:nth-child(3)',
  download: 'https://www.nirsoft.net/utils/nircmd-x64.zip',
  install: ['install_zipped_single', 'nircmd.exe'],
  other: {
    cli: {
      install: ['install_zipped_single', 'nircmdc.exe']
    }
  }
}
module.exports = data
