'use strict'

let data = {
  url: 'https://mypublicwifi.com/myhotspot/en/index.html',
  version: ['.showbydesktop tr>td:nth-child(3)', 'text', /([\d.]+)/],
  download: 'https://mypublicwifi.com/downloads/MyHotspot.exe',
  install: 'install_inno_type'
}
module.exports = data
