'use strict'

let data = {
  commercial: 3,
  url: 'https://mypublicwifi.com/en/index.html',
  version: ['.showbydesktop tr>td:nth-child(3):contains("Client")', 'text', /([\d.]+)/],
  download: 'https://mypublicwifi.com/downloads/SiteCharge.exe',
  install: 'install_inno',
  other: {
    server: {
      version: ['.showbydesktop tr>td:nth-child(3):contains("Server")', 'text', /([\d.]+)/],
      download: 'https://mypublicwifi.com/downloads/My%20CyberCafe.exe'
    }
  }
}
module.exports = data
