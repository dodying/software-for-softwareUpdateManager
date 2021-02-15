'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'HTTP Downloader': {
      site: {
        GitHub: 'https://github.com/erickutcher/httpdownloader/releases/latest'
      },
      versionChoice: '64.zip',
      install: 'install_zipped_single'
    },
    'HTTP Proxy': {
      site: {
        GitHub: 'https://github.com/erickutcher/httpproxy/releases/latest'
      },
      install: 'install_zipped_single'
    },
    'MD5 Bruteforcer': {
      site: {
        GitHub: 'https://github.com/erickutcher/md5bruteforcer/releases/latest'
      },
      install: 'install_zipped_single'
    },
    'Monitor Off': {
      site: {
        GitHub: 'https://github.com/erickutcher/monitoroff/releases/latest'
      },
      install: 'install_zipped_single'
    },
    'Thumbcache Viewer': {
      site: {
        GitHub: 'https://github.com/thumbcacheviewer/thumbcacheviewer/releases/latest'
      },
      versionChoice: '64.zip',
      install: 'install_zipped_single',
      other: {
        cli: {
          site: {
            GitHub: 'https://github.com/thumbcacheviewer/thumbcacheviewer/releases/latest'
          },
          versionChoice: 'cmd.zip'
        }
      }
    },
    'Thumbs Viewer': {
      site: {
        GitHub: 'https://github.com/thumbsviewer/thumbsviewer/releases/latest'
      },
      versionChoice: '64.zip',
      install: 'install_zipped_single'
    },
    'VZ Enhanced 56K': {
      site: {
        GitHub: 'https://github.com/erickutcher/vzenhanced56k/releases/latest'
      },
      install: 'install_zipped_single'
    },
    'VZ Enhanced': {
      site: {
        GitHub: 'https://github.com/vzenhanced/vzenhanced/releases/latest'
      },
      install: 'install_zipped_single'
    }
  }
};
