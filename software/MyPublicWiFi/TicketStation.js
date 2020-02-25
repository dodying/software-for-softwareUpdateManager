'use strict'

let data = {
  url: 'https://mypublicwifi.com/ticketstation/en/index.html',
  version: ['.showbydesktop tr>td:nth-child(2)', 'text', /([\d.]+)/],
  download: 'https://mypublicwifi.com/downloads/TicketStation.exe',
  install: 'install_inno'
}
module.exports = data
