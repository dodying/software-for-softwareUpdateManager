'use strict';

const data = {
  url: 'https://mypublicwifi.com/ticketstation/en/index.html',
  version: ['.showbydesktop tr>td:nth-child(3)', 'text', /([\d.]+)/],
  download: 'https://mypublicwifi.com/downloads/TicketStation.exe',
  install: 'install_inno'
};
module.exports = data;
