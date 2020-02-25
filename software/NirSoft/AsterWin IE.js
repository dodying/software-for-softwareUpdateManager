'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/asterie.html',
  version: '.utilcaption',
  changelog: '.utilsubject:contains("Versions History")+table>tbody>tr:nth-child(2)>td:nth-child(3)',
  download: 'https://www.nirsoft.net/utils/asterie.zip',
  install: 'install_zipped_single'
}
module.exports = data
