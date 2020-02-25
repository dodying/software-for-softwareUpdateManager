'use strict'

let data = {
  useProxy: true,
  url: 'http://dongtaiwang.com/loc/download.php',
  version: '#one_col>table table>tbody>tr>th',
  download: '#one_col>table table>tbody>tr>td a[href$=".exe"]',
  install: 'install_single',
  other: {
    limited: {
      version: '#one_col>table table>tbody>tr:nth-child(2)>th',
      download: '#one_col>table table>tbody>tr:nth-child(2)>td a[href$=".exe"]'
    }
  }
}
module.exports = data
