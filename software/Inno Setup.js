'use strict'

let data = {
  url: 'http://www.jrsoftware.org/isdl.php',
  version: '.standard tbody>tr:nth-child(2)>td',
  changelog: [ 'http://www.jrsoftware.org/files/is6-whatsnew.htm', 'p+ul'],
  download: 'http://www.jrsoftware.org/download.php/is.exe',
  install: 'install_inno'
}
module.exports = data
