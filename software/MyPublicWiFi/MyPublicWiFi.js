'use strict'

let data = {
  url: 'https://mypublicwifi.com/publicwifi/en/index.html',
  version: ['.showbydesktop tr>td:nth-child(3)', 'text', /([\d.]+)/],
  download: 'https://mypublicwifi.com/downloads/MyPublicWiFi.exe',
  install: 'install_inno_type'
}
module.exports = data
