'use strict';

module.exports = {
  type: 'software-list',
  list: {
    MyCyberCafe: {
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
    },
    MyHotspot: {
      url: 'https://mypublicwifi.com/myhotspot/en/index.html',
      version: ['.showbydesktop tr>td:nth-child(3)', 'text', /([\d.]+)/],
      download: 'https://mypublicwifi.com/downloads/MyHotspot.exe',
      install: 'install_inno_type'
    },
    MyPublicWiFi: {
      url: 'https://mypublicwifi.com/publicwifi/en/index.html',
      version: ['.showbydesktop tr>td:nth-child(3)', 'text', /([\d.]+)/],
      download: 'https://mypublicwifi.com/downloads/MyPublicWiFi.exe',
      install: 'install_inno_type'
    },
    TicketStation: {
      url: 'https://mypublicwifi.com/ticketstation/en/index.html',
      version: ['.showbydesktop tr>td:nth-child(3)', 'text', /([\d.]+)/],
      download: 'https://mypublicwifi.com/downloads/TicketStation.exe',
      install: 'install_inno'
    }
  }
};
