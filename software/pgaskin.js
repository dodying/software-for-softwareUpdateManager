'use strict';

module.exports = {
  type: 'software-list',
  list: {
    BookBrowser: {
      site: {
        GitHub: 'https://github.com/pgaskin/BookBrowser/releases/latest'
      },
      versionChoice: 'windows-64bit.exe',
      install: 'install_single'
    },
    'easy-novnc': {
      site: {
        GitHub: 'https://github.com/pgaskin/easy-novnc/releases/latest'
      },
      versionChoice: 'easy-novnc_windows.exe',
      install: 'install_single',
      other: {
        wstcp: {
          versionChoice: 'wstcp_windows.exe'
        }
      }
    },
    Kepubify: {
      site: {
        GitHub: 'https://github.com/pgaskin/kepubify/releases/latest'
      },
      versionChoice: 'kepubify-windows-64bit.exe',
      install: 'install_single',
      other: {
        covergen: {
          versionChoice: 'covergen-windows-64bit.exe'
        },
        seriesmeta: {
          versionChoice: 'seriesmeta-windows-64bit.exe'
        }
      }
    }
  }
};
