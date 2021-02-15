'use strict';

module.exports = {
  type: 'software-list',
  list: {
    ButtonBar: {
      url: 'https://www.uwe-sieber.de/bbar_e.html',
      version: '[height="55"]',
      download: 'https://www.uwe-sieber.de/files/bbar.zip',
      install: 'install'
    },
    ComPortMan: {
      url: 'https://www.uwe-sieber.de/comportman_e.html',
      version: '[height="55"]',
      download: 'https://www.uwe-sieber.de/files/comportman.zip',
      install: 'install'
    },
    'MCI-Browser': {
      url: 'https://www.uwe-sieber.de/mcibrowser_e.html',
      version: '[height="55"]',
      download: 'https://www.uwe-sieber.de/files/mcibrowser.zip',
      install: 'install_zipped_single'
    },
    MScope: {
      url: 'https://www.uwe-sieber.de/mscope_e.html',
      version: '[height="55"]',
      download: 'https://www.uwe-sieber.de/files/mscope.zip',
      install: 'install'
    },
    UMBPCI: {
      url: 'https://www.uwe-sieber.de/umbpci_e.html',
      version: '[height="55"]',
      download: 'https://www.uwe-sieber.de/files/umbpci_e.zip',
      install: 'install'
    },
    'USB Device Tree Viewer': {
      url: 'https://www.uwe-sieber.de/usbtreeview_e.html',
      version: '[height="55"]',
      download: 'https://www.uwe-sieber.de/files/usbtreeview.zip',
      install: 'install_zipped_single'
    },
    USBDLM: {
      url: 'https://www.uwe-sieber.de/usbdlm_e.html',
      version: '[height="55"]',
      download: 'https://www.uwe-sieber.de/files/usbdlm.zip',
      install: 'install',
      other: {
        cli: {
          download: 'https://www.uwe-sieber.de/files/listusbdrives.zip',
          install: 'install_zipped_single'
        }
      }
    }
  }
};
