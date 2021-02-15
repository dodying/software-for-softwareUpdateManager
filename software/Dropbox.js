'use strict';

module.exports = {
  type: 'software-list',
  list: {
    dbxcli: {
      site: {
        GitHub: 'https://github.com/dropbox/dbxcli/releases/latest'
      },
      versionChoice: 'windows-amd64.exe',
      install: 'install_single'
    },
    Dropbox: {
      url: 'https://www.dropboxforum.com/t5/Dropbox-desktop-client-builds/bd-p/101003016',
      version: '[href^="/t5/Dropbox-desktop-client-builds/Stable-Build"]',
      changelog: {
        url: '[href^="/t5/Dropbox-desktop-client-builds/Stable-Build"]',
        selector: '#bodyDisplay'
      },
      download: 'https://clientupdates.dropboxstatic.com/dbx-releng/client/Dropbox%20{version}%20Offline%20Installer.exe',
      install: ['install_zipped', 'install_nsis', 'Installer.exe', null, '$0'],
      other: {
        beta: {
          version: '[href^="/t5/Dropbox-desktop-client-builds/Beta-Build"]',
          changelog: {
            url: '[href^="/t5/Dropbox-desktop-client-builds/Beta-Build"]',
            selector: '#bodyDisplay'
          }
        }
      }
    }
  }
};
