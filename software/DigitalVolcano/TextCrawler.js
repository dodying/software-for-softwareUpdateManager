'use strict'

let data = {
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
module.exports = data
