'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Duplicate Cleaner': {
      url: 'https://www.digitalvolcano.co.uk/dcdownloads.html',
      version: 'div+div+div>h3+ul>li:has(a[href="dcchangelog.html"])',
      changelog: ['https://www.digitalvolcano.co.uk/dcchangelog.html', '.content-wrap>div>div:nth-child(2)>ul'],
      download: 'https://www.digitalvolcano.co.uk/download/DuplicateCleanerFree4_setup.exe',
      install: 'install_nsis',
      other: {
        pro: {
          commercial: 3,
          version: 'li:has(a[href="dcchangelog.html"])',
          download: 'https://www.digitalvolcano.co.uk/download/DuplicateCleanerPro4_setup.exe'
        }
      }
    },
    HashTool: {
      url: 'https://www.digitalvolcano.co.uk/hash.html',
      version: '#content div+div>p+ul>li:nth-child(2)',
      download: 'a.button-green',
      install: ['install_zipped_single', 'Hash_Tool.exe']
    },
    TaskCanvas: {
      commercial: 3,
      url: 'https://www.digitalvolcano.co.uk/taskcanvasdownload.html',
      version: '#content li:nth-child(2)',
      download: 'https://www.digitalvolcano.co.uk/download/TaskCanvas_setup.exe',
      install: 'install_nsis'
    },
    TextCrawler: {
      url: 'https://www.digitalvolcano.co.uk/tcdownloads.html',
      version: 'div+h3+ul>li:has(a[href="tcchangelog.html"])',
      changelog: ['https://www.digitalvolcano.co.uk/tcchangelog.html', '.content-wrap>div>div:nth-child(2)>ul'],
      download: 'https://www.digitalvolcano.co.uk/download/TextCrawler_Setup.exe',
      install: ['install_zipped_single', 'TextCrawler.exe'],
      other: {
        pro: {
          commercial: 3,
          url: 'https://www.digitalvolcano.co.uk/tcdownloads.html',
          version: 'li:has(a[href="tcchangelog.html"])',
          download: 'https://www.digitalvolcano.co.uk/download/TextCrawlerPro_setup.exe',
          install: 'install_nsis'
        },
        'pro-crack': {
          url: 'https://www.digitalvolcano.co.uk/tcdownloads.html',
          version: 'li:has(a[href="tcchangelog.html"])',
          download: 'https://www.digitalvolcano.co.uk/download/TextCrawlerPro_setup.exe',
          install: ['install_nsis', 'IsLicense50.dll']
        }
      }
    }
  }
};
