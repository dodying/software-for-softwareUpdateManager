'use strict'

let data = {
  url: 'http://www.efficientsoftware.net/download.htm',
  version: '#download1_con tr:contains("Efficient Password Manager Pro") .productMoreInfo',
  download: '#download1_con tr:contains("Efficient Password Manager Pro") [href$=".exe"]',
  install: 'install_inno'
}
module.exports = data
