'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Advanced IP Scanner': {
      url: 'http://www.advanced-ip-scanner.com/',
      version: ['.download_link', 'href'],
      download: '.download_link',
      preferPath: 'advanced_ip_scanner.exe',
      install: info => {
        const path = require('path');
        const installed = info.fns.install.inno(info);
        if (installed) {
          const list = info.fns.walk(path.resolve(info.fns.dirname, 'unzip'));
          info.output = list.filter(i => path.extname(i) === '.msi')[0];
          return info.fns.install.msi(info, null, 'advanced_ip_scanner.exe');
        } else {
          return false;
        }
      }
    },
    'Advanced Port Scanner': {
      url: 'http://www.advanced-port-scanner.com/',
      version: ['.download-button', 'href'],
      download: '.download-button',
      preferPath: 'advanced_port_scanner.exe',
      install: info => {
        const path = require('path');
        const installed = info.fns.install.inno(info);
        if (installed) {
          const list = info.fns.walk(path.resolve(info.fns.dirname, 'unzip'));
          info.output = list.filter(i => path.extname(i) === '.msi')[0];
          return info.fns.install.msi(info, null, 'advanced_port_scanner.exe');
        } else {
          return false;
        }
      }
    },
    Radmin: {
      commercial: 3,
      url: 'https://www.radmin.com/download/',
      version: 'h3:contains("Radmin Viewer")',
      download: '.d1[href$=".zip"][href*="Radmin_Viewer"]',
      install: 'install',
      other: {
        server: {
          version: 'h3:contains("Radmin Server")',
          download: '.d1[href$=".msi"][href*="Radmin_Server"]',
          install: 'install_msi_cli'
        }
      }
    }
  }
};
