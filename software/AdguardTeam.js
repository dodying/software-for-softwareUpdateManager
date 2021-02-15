'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'AdGuard Home': {
      site: {
        GitHub: 'https://github.com/AdguardTeam/AdGuardHome/releases/latest'
      },
      versionChoice: 'AdGuardHome_Windows_amd64.zip',
      install: 'install_zipped_single'
    },
    Adguard: {
      site: {
        GitHub: 'https://github.com/AdguardTeam/AdguardForWindows/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_wix', null, 'setup.msi', 'Adguard.exe'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/AdguardTeam/AdguardForWindows/releases'
          }
        }
      }
    },
    'DNS Proxy': {
      site: {
        GitHub: 'https://github.com/AdguardTeam/dnsproxy/releases/latest'
      },
      versionChoice: 'windows-amd64(.*).zip',
      install: 'install_zipped_single'
    }
  }
};
